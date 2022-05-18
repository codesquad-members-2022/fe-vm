import React, { useEffect, useState, createContext } from "react";
import amountOfMoneyData from "../data/amountOfMoney";

const WalletContext = createContext({
  amountOfMoney: {},
  getWithDrawableAmount: () => {},
  getTotalMoney: () => {},
});

function WalletProvider({ children }) {
  const [amountOfMoney, setAmountOfMoney] = useState({});

  function getWithdrawableAmount(requiredAmount) {
    const amountOfMoneyTemp = amountOfMoney;
    const withdrawableAmount = Object.entries(amountOfMoneyTemp)
      .sort(([valueA], [valueB]) => valueB - valueA)
      .map(([value, amount]) => {
        const numberOfSubstracted = Math.min(Math.floor(requiredAmount / Number(value)), amount);
        requiredAmount -= value * numberOfSubstracted;
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
  function subtractMoney(value, numberOfSubstracted) {
    setAmountOfMoney({ ...amountOfMoney, [value]: amountOfMoney[value] - numberOfSubstracted });
  }
  function putMoneyToWallet(addedAmount) {
    const amountOfMoneyTemp = amountOfMoney;
    Object.entries(amountOfMoneyTemp)
      .sort(([valueA], [valueB]) => valueB - valueA)
      .forEach(([value]) => {
        const numberOfAdded = Math.min(Math.floor(addedAmount / Number(value)));
        addedAmount -= value * numberOfAdded;
        amountOfMoneyTemp[value] += numberOfAdded;
      });
    setAmountOfMoney(amountOfMoneyTemp);
  }
  useEffect(() => {
    setAmountOfMoney(amountOfMoneyData);
  }, []);
  const value = { amountOfMoney, getWithdrawableAmount, getTotalMoney, subtractMoney, putMoneyToWallet };
  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export { WalletContext, WalletProvider };
