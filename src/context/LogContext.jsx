import { createContext, useReducer } from 'react';

const initState = [];

export const LogContext = createContext(initState);

export const LogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(logReducer, initState);

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

  return (
    <LogContext.Provider
      value={{
        machineLog: state,
        insertMoneyLog,
        buyProductLog,
        dropProductLog,
      }}
    >
      {children}
    </LogContext.Provider>
  );
};

const logReducer = (state, action) => {
  const newState = [...state];

  switch (action.type) {
    case 'INSERT':
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
    case 'RETURN':
      return;
    default:
      throw new Error();
  }
};
