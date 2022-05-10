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

export const Records = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([
    "aaaa",
    "콜라를 구매했습니다. 우하우하우하우항후ㅏ",
    "돈을 엄청 많이 벌었습니다! 야호야호야호야ㅗ햐오햫오ㅑ"
  ]);
  return (
    <Records.Provider
      value={{
        records,
        setRecords
      }}
    >
      {children}
    </Records.Provider>
  );
};
