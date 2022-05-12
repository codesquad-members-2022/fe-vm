import React, { createContext, useReducer, useMemo } from 'react';

import { products, coins, logs, inputAmount, balance } from '@/mock/storage';

const initialState = {
  products,
  logs,
  inputAmount,
  balance,
  coins,
};

const ACTION = {
  INSERT_MONEY: 'INSERT_MONEY',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INSERT_MONEY: {
      const { amount } = action.payload;
      const logs = [...state.logs];
      const id = logs.length;
      const message = `${amount.toLocaleString()}원이 투입됐습니다.`;
      logs.push({ id, message });
      return {
        ...state,
        inputAmount: action.payload.amount,
        logs,
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
