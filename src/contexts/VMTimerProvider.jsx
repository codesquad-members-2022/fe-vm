/* eslint-disable react/prop-types */
import React, { useState, createContext, useCallback, useMemo } from 'react';

export const VMTimerContext = createContext([]);
export const VMTimerSetContext = createContext(null);

export function VMTimerProvider({ children }) {
  const [VMTimerID, setVMTimerId] = useState([]);

  const startVMTimer = useCallback(callbackArr => {
    const [newVMTimerID] = callbackArr.reduce(
      ([timerIDArr, accTime], [callback, time]) => {
        const totalTime = time ? accTime + time : accTime;
        const timerID = setTimeout(callback, totalTime);

        return [[...timerIDArr, timerID], totalTime];
      },
      [[], 0]
    );
    setVMTimerId(newVMTimerID);
  }, []);

  const stopVMTimer = useCallback(() => {
    if (!VMTimerID) return;

    VMTimerID.forEach(ID => clearTimeout(ID));
    setVMTimerId([]);
  }, [VMTimerID]);

  const setVMTimerID = useMemo(() => ({ startVMTimer, stopVMTimer }), [startVMTimer, stopVMTimer]);

  return (
    <VMTimerContext.Provider value={VMTimerID}>
      <VMTimerSetContext.Provider value={setVMTimerID}>{children}</VMTimerSetContext.Provider>;
    </VMTimerContext.Provider>
  );
}
