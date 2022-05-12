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
  INSERT_MONEY_BY_TYPING: 'INSERT_MONEY_BY_TYPING',
  INSERT_COIN: 'INSERT_COIN',
  INCREMENT_COIN: 'INCREMENT_COIN',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INSERT_MONEY_BY_TYPING: {
      const { amount } = action.payload;
      const { balance, coins, logs, totalInputAmount } = state;
      const requestedInputAmount = balance < amount ? balance : amount;
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
      const realInputAmount = requestedInputAmount - surplus;

      const newLogs = [...logs];
      newLogs.push({
        id: newLogs.length,
        message: `${realInputAmount.toLocaleString()}원이 투입됐습니다.`,
      });

      const newTotalInputAmount = totalInputAmount + realInputAmount;

      const newBalance = balance - realInputAmount;

      return {
        ...state,
        totalInputAmount: newTotalInputAmount,
        coins: newCoins,
        logs: newLogs,
        balance: newBalance,
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
