import { createContext, useCallback, useMemo, useState } from "react";

import constants from "utils/constants";

export const ProgressContext = createContext([]);
export const SetProgressContext = createContext(() => {});

const { DECREASE_COUNT } = constants;

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState([]);

  const updateProgress = useCallback((type, newProgress) => {
    setProgress((prevProgress) => {
      return [
        ...prevProgress,
        { type, money: newProgress, count: DECREASE_COUNT },
      ];
    });
  }, []);

  const progressList = useMemo(
    () => ({
      progress,
    }),
    [progress]
  );

  return (
    <SetProgressContext.Provider value={updateProgress}>
      <ProgressContext.Provider value={progressList}>
        {children}
      </ProgressContext.Provider>
    </SetProgressContext.Provider>
  );
};

export default ProgressProvider;
