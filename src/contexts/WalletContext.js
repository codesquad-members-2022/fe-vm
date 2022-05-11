import React, { useEffect, useState, createContext } from "react";
import amountOfMoneyData from "../data/amountOfMoney";

const WalletContext = createContext({
  amountOfMoney: {},
  getTotalMoney: () => {},
});

function WalletProvider({ children }) {
  const [amountOfMoney, setAmountOfMoney] = useState({});

  function getTotalMoney() {
    return Object.entries(amountOfMoney).reduce((total, [value, amount]) => (total += value * amount), 0);
  }
  useEffect(() => {
    setAmountOfMoney(amountOfMoneyData);
  }, []);
  const value = { amountOfMoney, getTotalMoney };
  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export { WalletContext, WalletProvider };
