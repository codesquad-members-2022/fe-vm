import React, { useReducer, createContext, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { vmInitiState, vmReducer } from './reducer';

const Context = createContext();

export const useVMContext = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error('useVMContext must be used within VMContext');
  }

  return context;
};

export default function VMContext({ children }) {
  const [state, dispatch] = useReducer(vmReducer, vmInitiState);

  const providerValue = useMemo(() => ({ ...state, dispatch }), [dispatch, state]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

VMContext.propTypes = {
  children: PropTypes.element.isRequired,
};
