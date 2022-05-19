import React, { Dispatch, createContext, useReducer, useMemo, useContext } from 'react';

import { coins } from '@/mock/storage';

enum WALLET_ACTION {
  INSERT_COIN = 'INSERT_COIN',
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

    case WALLET_ACTION.INSERT_MONEY_BY_TYPING: {
      const { amount: typingAmount } = action.payload; // TODO: 네이밍 다시하기
      const { coins, balance } = state; // TODO: logs, totalInputAmount 분리하기
      const requestedInputAmount = balance < typingAmount ? balance : typingAmount;
      const newCoins = [...coins];

      if (requestedInputAmount === 0) {
        return state;
      }

      let surplus = requestedInputAmount;

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

const useWallet = () => {
  const wallet = useContext(WalletContext);

  if (!wallet) {
    console.log('wallet error');
    throw new Error('wallet error');
  }
  return wallet;
};

export { useWallet, WalletProvider, WALLET_ACTION };
