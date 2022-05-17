import { createContext, useCallback, useMemo, useState } from "react";

export const ProgressContext = createContext([]);
export const SetProgressContext = createContext(() => {});

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState([]);

  const updateProgress = useCallback((newProgress) => {
    setProgress((prevProgress) => {
      return [...prevProgress, newProgress];
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
