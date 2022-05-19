import React, { createContext } from "react";
import { useCoin } from "hooks";
import { money } from "data";

const CoinContext = createContext();
const SetCoinContext = createContext();

function CoinProvider({ children }) {
  const { coin, selectCoin } = useCoin(money);

  return (
    <CoinContext.Provider value={coin}>
      <SetCoinContext.Provider value={selectCoin}>{children}</SetCoinContext.Provider>
    </CoinContext.Provider>
  );
}

export { CoinContext, SetCoinContext, CoinProvider };
