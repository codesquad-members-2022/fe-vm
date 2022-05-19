import React, {
  Dispatch,
  createContext,
  useReducer,
  useMemo,
  useContext,
  useCallback,
} from 'react';

import { coins } from '@/mock/storage';

enum WALLET_ACTION {
  INSERT_COIN = 'INSERT_COIN',
  INSERT_COINS = 'INSERT_COINS',
  INSERT_MONEY_BY_TYPING = 'INSERT_MONEY_BY_TYPING',
  INCREMENT_COIN = 'INCREMENT_COIN',
}

interface ICoin {
  id: string;
  amount: number;
  count: number;
}

interface IWallet {
  coins: ICoin[];
  balance: number;
}

type WalletAction =
  | { type: WALLET_ACTION.INSERT_COIN; payload: { amount: number; count: number; index: number } }
  | {
      type: WALLET_ACTION.INSERT_COINS;
      payload: { coinCountInfo: { coins: Omit<ICoin, 'id'>[] } };
    }
  | {
      type: WALLET_ACTION.INSERT_MONEY_BY_TYPING;
      payload: { amount: number };
    }
  | {
      type: WALLET_ACTION.INCREMENT_COIN;
      payload: { amount: number; count: number; index: number };
    };
type WalletDispatch = Dispatch<WalletAction>;

const WalletContext = createContext<{ state: IWallet; dispatch: WalletDispatch } | null>(null);

const walletReducer = (state: IWallet, action: WalletAction): IWallet => {
  switch (action.type) {
    case WALLET_ACTION.INSERT_COIN: {
      const { amount, count, index } = action.payload;
      const { coins, balance } = state;

      const newCoins = coins;
      newCoins[index] = { ...newCoins[index] };
      newCoins[index].count = count - 1;

      const newBalance = balance - amount;

      return {
        ...state,
        coins: newCoins,
        balance: newBalance,
      };
    }

    // TODO: INSET_MONEY_BY_TYPING 지우기
    case WALLET_ACTION.INSERT_COINS: {
      const { coinCountInfo } = action.payload;
      const { coins, balance } = state;

      let inputAmount = 0;
      coins.forEach((coin, index, coins) => {
        const { count: requestedCount } = coinCountInfo.coins[index];
        if (requestedCount === 0) {
          return;
        }

        const newCount = coins[index].count - requestedCount;
        inputAmount += coins[index].amount * requestedCount;
        coins[index] = { ...coins[index], count: newCount };
      });

      return {
        ...state,
        coins,
        balance: balance - inputAmount,
      };
    }

    case WALLET_ACTION.INSERT_MONEY_BY_TYPING: {
      const { amount: typingAmount } = action.payload; // TODO: 네이밍 다시하기
      const { coins, balance } = state; // TODO: logs, totalInputAmount 분리하기
      const requestedInputAmount = balance < typingAmount ? balance : typingAmount;
      const newCoins = [...coins];

      if (requestedInputAmount === 0) {
        return state;
      }

      let surplus = requestedInputAmount;

      /* NOTE: 각 동전이 총 몇개 사용될 수 있는지 외부에서 파악하고
         NOTE: 알고리즘 적용 후 realInputAmount와 동전개수 넣어주는 방식?
       */

      for (let i = newCoins.length - 1; i >= 0; i--) {
        if (surplus === 0) {
          break;
        }

        const { amount, count } = newCoins[i];

        const requiredCount = Math.floor(surplus / amount);
        const realRequiredCount = requiredCount > count ? count : requiredCount;
        const newCount = count - realRequiredCount;
        surplus -= realRequiredCount * amount;
        newCoins[i] = { ...newCoins[i], count: newCount };

        console.log(`%c[${amount}]: ${realRequiredCount}개 사용`, 'color: #fe2;');
      }
      console.log(`----------`);

      // NOTE: log, totalInputAmount 변경시 realInputAmount가 필요함
      const realInputAmount = requestedInputAmount - surplus;
      const newBalance = balance - realInputAmount;

      return {
        ...state,
        balance: newBalance,
      };
    }

    case WALLET_ACTION.INCREMENT_COIN: {
      const { amount, count, index } = action.payload;
      const { coins, balance } = state;

      const newCoins = [...coins];
      newCoins[index] = { ...newCoins[index] };
      newCoins[index].count = count + 1;

      const newBalance = balance + amount;

      return {
        ...state,
        coins: newCoins,
        balance: newBalance,
      };
    }

    default: {
      return state;
    }
  }
};

const walletInitialState = {
  coins,
  balance: coins.reduce((acc, { amount, count }) => acc + amount * count, 0),
};

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(walletReducer, walletInitialState);
  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

interface ICalInputToCoins {
  (wallet: IWallet, inputAmount: number): {
    realInputAmount: number;
    requiredCoinCountInfo: { amount: number; count: number }[];
  };
}

interface ICalReturnToCoins {
  (wallet: IWallet, returnAmount: number): { amount: number; count: number }[];
}

const calInputToCoins: ICalInputToCoins = (wallet, inputAmount) => {
  // inputAmount 받으면 적절하게 분류해서 실제 투입금, 실제 인풋 정보줌
  const { coins, balance } = wallet;
  const requiredCoinCountInfo = wallet.coins.map(({ amount, count }) => {
    return { amount, count: 0 };
  });

  // 갖고 있는 금액보다 많은 금액이 요청되면 갖고 있는 금액만 투입
  const requestedInputAmount = balance < inputAmount ? balance : inputAmount;
  let surplus = requestedInputAmount;

  for (let i = coins.length - 1; i >= 0; i--) {
    if (surplus === 0) {
      break;
    }

    const { amount, count } = coins[i];

    // 실제로는 requiredCount 만큼 넣을 수 있어도, 가지고 있는 동전 개수가 적을 수도 있음
    const requiredCount = Math.floor(surplus / amount);
    const realRequiredCount = requiredCount > count ? count : requiredCount;
    requiredCoinCountInfo[i].count = realRequiredCount;
    surplus -= realRequiredCount * amount;

    console.log(`%c[${amount}]: ${realRequiredCount}개 사용`, 'color: #fe2;');
  }

  const realInputAmount = requestedInputAmount - surplus;

  return { realInputAmount, requiredCoinCountInfo };
};

const calReturnToCoins: ICalReturnToCoins = (wallet, returnAmount) => {
  const { coins } = wallet;
  const getCoinCountInfo = wallet.coins.map(({ amount, count }) => {
    return { amount, count: 0 };
  });

  if (returnAmount === 0) {
    return getCoinCountInfo;
  }

  let remain = returnAmount;
  for (let i = coins.length - 1; i >= 0; i--) {
    const { amount } = coins[i];
    if (amount > remain) {
      continue;
    }

    const temp = Math.floor(remain / amount);
    getCoinCountInfo[i].count = Math.floor(remain / amount);
    remain %= amount;
    console.log(`%c[${amount}]: ${temp}개 충전`, 'color: #fe2;');
  }
  console.log(`----------`);

  return getCoinCountInfo;
};

const useWallet = () => {
  const wallet = useContext(WalletContext);
  const _calInputToCoins = useCallback(() => calInputToCoins, []);
  const _calReturnToCoins = useCallback(() => calReturnToCoins, []);

  if (!wallet) {
    throw new Error('WalletContext Error');
  }

  return [wallet, _calInputToCoins, _calReturnToCoins];
};

export { useWallet, WalletProvider, WALLET_ACTION };
