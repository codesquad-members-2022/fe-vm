import React, { createContext } from "react";
import { useCoin } from "hooks";
import { money } from "data";

const CoinContext = createContext();

function CoinProvider({ children }) {
  const { coin, selectCoin } = useCoin(money);
  return <CoinContext.Provider value={{ coin, selectCoin }}>{children}</CoinContext.Provider>;
}

export { CoinContext, CoinProvider };
