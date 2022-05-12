import React, { useEffect, useState, createContext } from "react";
import amountOfMoneyData from "../data/amountOfMoney";

const WalletContext = createContext({
  amountOfMoney: {},
  getWithDrawableAmount: () => {},
  getTotalMoney: () => {},
});

function WalletProvider({ children }) {
  const [amountOfMoney, setAmountOfMoney] = useState({});

  function getWithDrawableAmount(money) {
    const amountOfMoneyTemp = amountOfMoney;
    const withdrawableAmount = Object.entries(amountOfMoneyTemp)
      .sort((a, b) => b[0] - a[0])
      .map(([value, amount]) => {
        const numberOfSubstracted = Math.min(Math.floor(money / Number(value)), amount);
        money -= value * numberOfSubstracted;
        amountOfMoneyTemp[value] -= numberOfSubstracted;
        return [value, numberOfSubstracted];
      })
      .reduce((acc, [value, numberOfSubstracted]) => (acc += value * numberOfSubstracted), 0);

    setAmountOfMoney(amountOfMoneyTemp);

    return withdrawableAmount;
  }
  function getTotalMoney() {
    return Object.entries(amountOfMoney).reduce(
      (total, [valueKey, amount]) => (total += Number(valueKey) * amount),
      0
    );
  }

  useEffect(() => {
    setAmountOfMoney(amountOfMoneyData);
  }, []);
  const value = { amountOfMoney, getWithDrawableAmount, getTotalMoney };
  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export { WalletContext, WalletProvider };
