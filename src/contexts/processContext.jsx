import { createContext, useCallback, useMemo, useState } from "react";

export const ProcessContext = createContext([]);
export const SetProcessContext = createContext(() => {});

const ProcessProvider = ({ children }) => {
  const [process, setProcess] = useState([]);

  const updateProcess = useCallback((newProcess) => {
    setProcess((prevProcess) => {
      return [...prevProcess, newProcess];
    });
  }, []);

  const processList = useMemo(
    () => ({
      process,
    }),
    [process]
  );

  return (
    <SetProcessContext.Provider value={updateProcess}>
      <ProcessContext.Provider value={processList}>
        {children}
      </ProcessContext.Provider>
    </SetProcessContext.Provider>
  );
};

export default ProcessProvider;
