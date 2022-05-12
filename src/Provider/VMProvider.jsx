import React, { createContext, useReducer, useMemo } from 'react';

import { products, coins, logs, totalInputAmount, balance } from '@/mock/storage';

const initialState = {
  products,
  logs,
  totalInputAmount,
  balance,
  coins,
};

const ACTION = {
  // TODO: INSERT_MONEY 이름 바꾸기
  INSERT_MONEY: 'INSERT_MONEY',
  INSERT_COIN: 'INSERT_COIN',
  INCREMENT_COIN: 'INCREMENT_COIN',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INSERT_MONEY: {
      const { balance } = state;
      const { amount } = action.payload;

      const tmp = balance < amount ? balance : amount;

      const logs = [...state.logs];
      const id = logs.length;
      const message = `${amount.toLocaleString()}원이 투입됐습니다.`;
      logs.push({ id, message });

      return {
        ...state,
        totalInputAmount: amount,
        logs,
      };
    }

    case ACTION.INSERT_COIN: {
      const { amount, count } = action.payload;

      if (count === 0) {
        return state;
      }
      const logs = [...state.logs];
      const id = logs.length;
      const message = `${amount.toLocaleString()}원이 투입됐습니다.`;
      logs.push({ id, message });

      const coins = { ...state.coins };
      coins[amount].count = count - 1;

      const totalInputAmount = state.totalInputAmount + amount;

      const balance = state.balance - amount;

      return {
        ...state,
        logs,
        coins,
        totalInputAmount,
        balance,
      };
    }

    case ACTION.INCREMENT_COIN: {
      const { amount, count } = action.payload;

      const coins = { ...state.coins };
      coins[amount].count = count + 1;

      const balance = state.balance + amount;

      return {
        ...state,
        coins,
        balance,
      };
    }

    default: {
      return state;
    }
  }
};

const VMContext = createContext(null);

const VMProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <VMContext.Provider value={value}>{children}</VMContext.Provider>;
};

export { ACTION, VMContext, VMProvider };
