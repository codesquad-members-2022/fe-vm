import React, { useReducer, createContext, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { initState, reducer } from './reducer';

const Context = createContext();

export const useUserContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useVMContext must be used within VMContext');
  }

  return context;
};

export default function UserContext({ children }) {
  const [state, userDispatch] = useReducer(reducer, initState);

  const providerValue = useMemo(() => ({ ...state, userDispatch }), [userDispatch, state]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

UserContext.propTypes = {
  children: PropTypes.element.isRequired,
};
