import { createContext, useContext, useReducer } from 'react';

const initState = [];

export const LogContext = createContext(initState);

export const LogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logReducer, initState);

  return <LogContext.Provider value={{ state, dispatch }}>{children}</LogContext.Provider>;
};

const logReducer = (state, action) => {
  const newState = [...state];

  switch (action.type) {
    case 'INSERT':
    case 'RETURN':
      action.payload.forEach(money => {
        const newLog = {
          id: newState.length + 1,
          type: action.type,
          value: {
            unit: money.unit,
            amount: money.amount,
          },
        };

        newState.push(newLog);
      });

      return newState;
    case 'BUY':
    case 'DROP':
      const newLog = {
        id: state.length + 1,
        type: action.type,
        value: action.payload,
      };

      newState.push(newLog);

      return newState;
    default:
      throw new Error();
  }
};

export function useLogState() {
  const { state, dispatch } = useContext(LogContext);

  if (!state) throw new Error();

  const insertMoneyLog = money => {
    dispatch({
      type: 'INSERT',
      payload: money,
    });
  };

  const buyProductLog = product => {
    dispatch({
      type: 'BUY',
      payload: product,
    });
  };

  const dropProductLog = product => {
    dispatch({
      type: 'DROP',
      payload: product,
    });
  };

  const returnMoneyLog = money => {
    dispatch({
      type: 'RETURN',
      payload: money,
    });
  };

  return {
    machineLog: state,
    insertMoneyLog,
    buyProductLog,
    dropProductLog,
    returnMoneyLog,
  };
}
