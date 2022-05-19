import React, { useState, createContext } from "react";

const InsertCoinContext = createContext();
const SetInsertCoinContext = createContext();

function InsertCoinProvider({ children }) {
  const [insertCoin, setInsertCoin] = useState(0);

  return (
    <InsertCoinContext.Provider value={insertCoin}>
      <SetInsertCoinContext.Provider value={setInsertCoin}>{children}</SetInsertCoinContext.Provider>
    </InsertCoinContext.Provider>
  );
}

export { InsertCoinContext, SetInsertCoinContext, InsertCoinProvider };
