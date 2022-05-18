/* eslint-disable react/prop-types */
import React, { createContext } from 'react';
import useVMTimer from 'hooks/useVMTimer';

export const VMTimerContext = createContext([]);
export const VMTimerSetContext = createContext(null);

export function VMTimerProvider({ children }) {
  const { VMTimerID, startVMTimer } = useVMTimer();

  return (
    <VMTimerContext.Provider value={VMTimerID}>
      <VMTimerSetContext.Provider value={startVMTimer}>{children}</VMTimerSetContext.Provider>;
    </VMTimerContext.Provider>
  );
}
