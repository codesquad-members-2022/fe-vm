import React, { createContext, useReducer, useContext } from 'react';

import { INPUT_STATE, TIMER } from '@/constants/constants';
import cash from '@/mocks/cash';
import product from '@/mocks/product';

import { reducer } from './reducer';

const initialState = {
  cash,
  product,
  userCash: 0, // 유저가 보유한 돈
  insertedCash: 0, // 유저가 자판기에 현재 투입한 돈
  balance: 0, // 자판기에 있는 잔액
  userLog: [],
  inputState: INPUT_STATE.default,
  isInsertedCash: false,
  minutes: TIMER.initialMinites,
  seconds: TIMER.initialSeconds,
  timeoutId: null,
};

const VendorStateContext = createContext(null);
const VendorDispatchContext = createContext(null);

const useVendorState = () => {
  const state = useContext(VendorStateContext);
  if (!state) {
    throw new Error('Cannot find VendorProvider');
  }
  return state;
};

const useVendorDispatch = () => {
  const state = useContext(VendorDispatchContext);
  if (!state) {
    throw new Error('Cannot find VendorProvider');
  }
  return state;
};

const VendorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <VendorStateContext.Provider value={state}>
      <VendorDispatchContext.Provider value={dispatch}>{children}</VendorDispatchContext.Provider>
    </VendorStateContext.Provider>
  );
};

export { useVendorState, useVendorDispatch, VendorProvider };
