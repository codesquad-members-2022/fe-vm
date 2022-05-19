import React, { Dispatch, createContext, useReducer, useMemo, useContext } from 'react';

enum LOG_ACTION {
  SELECT_PRODUCT = 'SELECT_PRODUCT',
  INSERT_MONEY = 'INSERT_MONEY',
  RETURN_MONEY = 'RETURN_MONEY',
  CLEAR = 'CLEAR',
}

interface ILog {
  id: string;
  message: string;
}

type LogAction =
  | { type: LOG_ACTION.SELECT_PRODUCT; payload: { name: string } }
  | { type: LOG_ACTION.INSERT_MONEY; payload: { amount: number } }
  | { type: LOG_ACTION.RETURN_MONEY; payload: { amount: number } }
  | { type: LOG_ACTION.CLEAR };
type LogDispatch = Dispatch<LogAction>;

const LogContext = createContext<{ state: ILog[]; dispatch: LogDispatch } | null>(null);

const logReducer = (state: ILog[], action: LogAction): ILog[] => {
  switch (action.type) {
    case LOG_ACTION.SELECT_PRODUCT: {
      const { name } = action.payload;

      return [...state, { id: state.length.toString(), message: `${name}이(가) 선택됨` }];
    }

    case LOG_ACTION.INSERT_MONEY: {
      const { amount } = action.payload;

      return [
        ...state,
        { id: state.length.toString(), message: `${amount.toLocaleString()}원이 투입됨` },
      ];
    }

    case LOG_ACTION.RETURN_MONEY: {
      const { amount } = action.payload;

      return [
        ...state,
        { id: state.length.toString(), message: `${amount.toLocaleString()}원을 반환받음` },
      ];
    }

    case LOG_ACTION.CLEAR: {
      return [];
    }

    default: {
      return state;
    }
  }
};

const logInitialState: ILog[] = [];

const LogProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(logReducer, logInitialState);
  const value = useMemo(() => {
    return {
      state,
      dispatch,
    };
  }, [state]);

  return <LogContext.Provider value={value}>{children}</LogContext.Provider>;
};

const useLog = () => {
  const log = useContext(LogContext);

  if (!log) {
    throw new Error('LogContext Error');
  }

  return log;
};

export { useLog, LogProvider, LOG_ACTION, LogDispatch };
