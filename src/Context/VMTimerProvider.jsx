/* eslint-disable react/prop-types */
import React, { createContext, useMemo } from 'react';
import useVMTimer from 'hooks/useVMTimer';

export const VMTimerContext = createContext([]);
export const VMTimerSetContext = createContext(null);

export function VMTimerProvider({ children }) {
  const { VMTimerID, startVMTimer, stopVMTimer } = useVMTimer();
  const setVMTimerID = useMemo(() => ({ startVMTimer, stopVMTimer }), [startVMTimer, stopVMTimer]);

  return (
    <VMTimerContext.Provider value={VMTimerID}>
      <VMTimerSetContext.Provider value={setVMTimerID}>{children}</VMTimerSetContext.Provider>;
    </VMTimerContext.Provider>
  );
}
