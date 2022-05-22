import { createContext, useState } from 'react';

const RETURN_SECOND = 10;
const initState = RETURN_SECOND;

export const TimerContext = createContext(initState);

export const TimerProvider = ({ children }) => {
  const [countdown, setCountdown] = useState(initState);

  return (
    <TimerContext.Provider value={{ countdown, setCountdown }}>{children}</TimerContext.Provider>
  );
};
