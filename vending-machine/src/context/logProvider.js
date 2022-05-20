import { createContext, useState } from 'react';

export const LogContext = createContext([]);

export function LogProvider({ children }) {
  const [logList, setLogList] = useState([]);

  return <LogContext.Provider value={{ logList, setLogList }}>{children}</LogContext.Provider>;
}
