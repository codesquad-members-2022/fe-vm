import { useState } from 'react';

export default function useVMTimer() {
  const [VMTimerID, setVMTimerId] = useState([]);

  const startVMTimer = callbackArr => {
    const [newVMTimerID] = callbackArr.reduce(
      ([timerIDArr, accTime], [callback, time]) => {
        const timerID = setTimeout(callback, accTime + time);
        return [[...timerIDArr, timerID], accTime + time];
      },
      [[], 0]
    );
    setVMTimerId(newVMTimerID);
  };

  const stopVMTimer = () => {
    if (!VMTimerID) return;

    VMTimerID.forEach(ID => clearTimeout(ID));
    setVMTimerId([]);
  };

  return { VMTimerID, startVMTimer, stopVMTimer };
}
