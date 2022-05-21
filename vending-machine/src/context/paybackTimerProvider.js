import { createContext, useState } from 'react';

export const PaybackTimerContext = createContext(null);

export function PaybackTimerProvider({ children }) {
  const [paybackTimer, setPaybackTimer] = useState(null);

  return (
    <PaybackTimerContext.Provider value={{ paybackTimer, setPaybackTimer }}>{children}</PaybackTimerContext.Provider>
  );
}
