import React, { useReducer, createContext, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { initState, reducer } from './reducer';

const Context = createContext();

export const useNotification = () => {
  const context = useContext(Context);

  if (!context) {
    throw new Error('useNotification must be used within NotificationContext');
  }

  return context;
};

export default function NotificationContext({ children }) {
  const [state, notifyDispatch] = useReducer(reducer, initState);

  const providerValue = useMemo(() => ({ ...state, notifyDispatch }), [notifyDispatch, state]);

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

NotificationContext.propTypes = {
  children: PropTypes.element.isRequired,
};
