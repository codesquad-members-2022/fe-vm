import React, { useReducer, createContext, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { initState, reducer } from './reducer';

const Context = createContext();

export const useProductContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useVMContext must be used within VMContext');
  }

  return context;
};

export default function ProductContext({ children }) {
  const [state, vmDispatch] = useReducer(reducer, initState);

  const providerValue = useMemo(() => ({ ...state, vmDispatch }), [vmDispatch, state]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

ProductContext.propTypes = {
  children: PropTypes.element.isRequired,
};
