import React, { Dispatch, createContext, useReducer, useMemo, useContext } from 'react';

import { coins } from '@/mock/storage';

enum WALLET_ACTION {
  INSERT_COIN = 'INSERT_COIN',
  INSERT_COINS = 'INSERT_COINS',
  INCREMENT_COIN = 'INCREMENT_COIN',
  RETURN_COINS = 'RETURN_COINS',
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
      payload: { coinCountInfo: Omit<ICoin, 'id'>[] };
    }
  | {
      type: WALLET_ACTION.INCREMENT_COIN;
      payload: { amount: number; count: number; index: number };
    }
  | {
      type: WALLET_ACTION.RETURN_COINS;
      payload: { coinCountInfo: Omit<ICoin, 'id'>[] };
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

    case WALLET_ACTION.INSERT_COINS: {
      const { coinCountInfo } = action.payload;
      const { coins, balance } = state;

      let inputAmount = 0;
      coins.forEach((coin, index, coins) => {
        const { count: requestedCount } = coinCountInfo[index];
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

    case WALLET_ACTION.RETURN_COINS: {
      const { coinCountInfo } = action.payload;
      const { coins, balance } = state;

      let returnAmount = 0;
      coins.forEach((coin, index, coins) => {
        const { count: requestedCount } = coinCountInfo[index];
        if (requestedCount === 0) {
          return;
        }

        const newCount = coins[index].count + requestedCount;
        returnAmount += coins[index].amount * requestedCount;
        coins[index] = { ...coins[index], count: newCount };
      });

      return {
        ...state,
        coins,
        balance: balance - returnAmount,
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
    coinCountInfo: { amount: number; count: number }[];
  };
}

interface ICalReturnToCoins {
  (wallet: IWallet, returnAmount: number): Omit<ICoin, 'id'>[];
}

const calInputToCoins: ICalInputToCoins = (wallet, inputAmount) => {
  // inputAmount 받으면 적절하게 분류해서 실제 투입금, 실제 인풋 정보줌
  const { coins, balance } = wallet;
  const coinCountInfo = wallet.coins.map(({ amount }) => {
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
    coinCountInfo[i].count = realRequiredCount;
    surplus -= realRequiredCount * amount;

    console.log(`%c[${amount}]: ${realRequiredCount}개 사용`, 'color: #fe2;');
  }

  const realInputAmount = requestedInputAmount - surplus;

  return { realInputAmount, coinCountInfo };
};

const calReturnToCoins: ICalReturnToCoins = (wallet, returnAmount) => {
  const { coins } = wallet;
  const coinCountInfo = wallet.coins.map(({ amount }) => {
    return { amount, count: 0 };
  });

  if (returnAmount === 0) {
    return coinCountInfo;
  }

  let remain = returnAmount;
  for (let i = coins.length - 1; i >= 0; i--) {
    const { amount } = coins[i];
    if (amount > remain) {
      continue;
    }

    const temp = Math.floor(remain / amount);
    coinCountInfo[i].count = Math.floor(remain / amount);
    remain %= amount;
    console.log(`%c[${amount}]: ${temp}개 충전`, 'color: #fe2;');
  }
  console.log(`----------`);

  return coinCountInfo;
};

const useWallet = () => {
  const wallet = useContext(WalletContext);
  const _calInputToCoins = useMemo(() => calInputToCoins, []);
  const _calReturnToCoins = useMemo(() => calReturnToCoins, []);

  if (!wallet) {
    throw new Error('WalletContext Error');
  }

  return { wallet, calInputToCoins: _calInputToCoins, calReturnToCoins: _calReturnToCoins };
};

export {
  useWallet,
  WalletProvider,
  WALLET_ACTION,
  WalletDispatch,
  ICalInputToCoins,
  IWallet,
  ICoin,
};
