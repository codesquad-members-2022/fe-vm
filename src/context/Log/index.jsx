import reducer from 'context/Log/reducer';
import { dispatchAction } from 'context/Log/action';
import React, { createContext, useReducer } from 'react';

const initState = { logList: [] };

const LogContext = createContext(initState);
const LogProvider = ({ children }) => {
  const [state, logDispatch] = useReducer(reducer, initState);

  const LOG_TYPE = {
    INPUT: 'input',
    OUTPUT: 'output',
    ERROR: 'error',
    SELECT: 'select',
  };

  const value = {
    state,
    LOG_TYPE,
    logDispatch,
    ...dispatchAction,
  };

  return <LogContext.Provider value={value}>{children}</LogContext.Provider>;
};

export { LogContext, LogProvider };
