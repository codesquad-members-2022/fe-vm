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
      const { amount } = action.payload;
      const { balance, coins, logs } = state;

      //requested input amount
      const inputAmount = balance < amount ? balance : amount;

      let realInputAmount = 0;
      const newCoins = [...coins];
      console.log(newCoins);
      newCoins;

      const newLogs = [...logs];
      newLogs.push({
        id: newLogs.length,
        message: `${inputAmount.toLocaleString()}원이 투입됐습니다.`,
      });

      return {
        ...state,
        totalInputAmount: 10000,
        logs: newLogs,
      };
    }

    case ACTION.INSERT_COIN: {
      const { amount, count, index } = action.payload;
      const { logs, totalInputAmount, coins, balance } = state;

      const newLogs = [...logs];
      newLogs.push({ id: newLogs.length, message: `${amount.toLocaleString()}원이 투입됐습니다.` });

      const newCoins = [...coins];
      newCoins[index] = { ...newCoins[index] };
      newCoins[index].count = count - 1;

      const newTotalInputAmount = totalInputAmount + amount;

      const newBalance = balance - amount;

      return {
        ...state,
        logs: newLogs,
        coins: newCoins,
        totalInputAmount: newTotalInputAmount,
        balance: newBalance,
      };
    }

    case ACTION.INCREMENT_COIN: {
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
