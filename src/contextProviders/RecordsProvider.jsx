import { createContext, useState } from "react";

export const Records = createContext();

export const RecordsProvider = ({ children }) => {
  const [records, setRecords] = useState([]);

  const updateRecord = (activityType, recordData) => {
    const newRecord = makeRecord(activityType, recordData);
    setRecords((prev) => [newRecord, ...prev]);
  };

  const makeRecord = (activityType, recordData = null) => {
    switch (activityType) {
      case "purchase":
        return `${recordData}를 구매했습니다.`;
      case "outOfStock":
        return `${recordData}의 재고가 없습니다.`;
      case "lackOfInputsum":
        return `투입 금액이 부족합니다.`;
      case "inputMoney":
        return `${recordData.toLocaleString()}원을 투입했습니다.`;
      case "lackOfBalance":
        return `지갑에 돈이 부족합니다.`;
      case "returnMoney":
        return `${recordData.toLocaleString()}원이 반환되었습니다.`;
      default:
        console.log("invalid activity type");
    }
  };

  return (
    <Records.Provider
      value={{
        records,
        updateRecord
      }}
    >
      {children}
    </Records.Provider>
  );
};
