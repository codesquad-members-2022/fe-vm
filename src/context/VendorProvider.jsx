import React, { createContext, useReducer, useContext } from 'react';

import { initialState, reducer } from './reducer';

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
