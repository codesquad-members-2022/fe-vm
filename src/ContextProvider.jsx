import { createContext, useState } from "react";

export const InputSum = createContext();

export const InputSumProvider = ({ children }) => {
  const [inputSum, setInputSum] = useState(1500);
  return (
    <InputSum.Provider
      value={{
        inputSum,
        setInputSum
      }}
    >
      {children}
    </InputSum.Provider>
  );
};

export const RecordsProvider = createContext();

export const RecordsContextProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  return (
    <RecordsProvider.Provider
      value={{
        records,
        setRecords
      }}
    >
      {children}
    </RecordsProvider.Provider>
  );
};
