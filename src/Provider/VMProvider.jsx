import React, { createContext, useReducer, useMemo } from 'react';

import { products } from '@/mock/storage';

const initialState = {
  products,
};

const ACTION = {
  TEST: 'TEST',
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.TEST:
      return {
        ...state,
      };

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
