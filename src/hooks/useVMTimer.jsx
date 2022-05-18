import { useState, useCallback } from 'react';

export default function useVMTimer() {
  const [VMTimerID, setVMTimerId] = useState(null);

  const startVMTimer = useCallback(
    (callback, time) => {
      if (VMTimerID) clearTimeout(VMTimerID);

      const newVMTimerID = setTimeout(callback, time);
      setVMTimerId(newVMTimerID);
    },
    [VMTimerID]
  );

  return { VMTimerID, startVMTimer };
}
