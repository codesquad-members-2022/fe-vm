import React, { useState, createContext } from "react";

const InsertCoinContext = createContext();

function InsertCoinProvider({ children }) {
  const [insertCoin, setInsertCoin] = useState(0);
  return (
    <InsertCoinContext.Provider value={{ insertCoin, setInsertCoin }}>{children}</InsertCoinContext.Provider>
  );
}

export { InsertCoinContext, InsertCoinProvider };
