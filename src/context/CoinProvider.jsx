import React, { createContext } from "react";
import { useCoin } from "hooks";
import { money } from "data";

const CoinContext = createContext();
const SelectCoinContext = createContext();
const CorrectCoinContext = createContext();

function CoinProvider({ children }) {
  const { coin, selectCoin, correctCoin } = useCoin(money);

  return (
    <CoinContext.Provider value={coin}>
      <SelectCoinContext.Provider value={selectCoin}>
        <CorrectCoinContext.Provider value={correctCoin}>{children}</CorrectCoinContext.Provider>
      </SelectCoinContext.Provider>
    </CoinContext.Provider>
  );
}

export { CoinContext, SelectCoinContext, CorrectCoinContext, CoinProvider };
