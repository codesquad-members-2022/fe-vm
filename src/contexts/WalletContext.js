import React, { useEffect, useState, createContext } from "react";

const WalletContext = createContext({
  amountOfMoney: [],
  getWithDrawableAmount: () => {},
  getTotalMoney: () => {},
});

function WalletProvider({ children }) {
  const [amountOfMoney, setAmountOfMoney] = useState([]);

  function getWithdrawableAmount(requiredAmount) {
    const amountOfMoneyTemp = amountOfMoney;
    const withdrawableAmount = amountOfMoney
      .map(({ unit, amount }) => [unit, amount])
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
    return amountOfMoney
      .map(({ unit, amount }) => [unit, amount])
      .reduce((total, [unit, amount]) => (total += unit * amount), 0);
  }
  function subtractMoney(unit, numberOfSubstracted) {
    setAmountOfMoney(
      amountOfMoney.map((item) => {
        if (item.unit === unit) {
          item.amount -= numberOfSubstracted;
        }
        return item;
      })
    );
  }
  function putMoneyToWallet(addedAmount) {
    const amountOfMoneyTemp = amountOfMoney;
    amountOfMoney
      .map(({ unit, amount }) => [unit, amount])
      .sort(([valueA], [valueB]) => valueB - valueA)
      .forEach(([value]) => {
        const numberOfAdded = Math.min(Math.floor(addedAmount / Number(value)));
        addedAmount -= value * numberOfAdded;
        amountOfMoneyTemp[value] += numberOfAdded;
      });
    setAmountOfMoney(amountOfMoneyTemp);
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("data/amountOfMoney.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = await response.json();
      setAmountOfMoney(data);
    }
    fetchData();
  }, []);
  const value = { amountOfMoney, getWithdrawableAmount, getTotalMoney, subtractMoney, putMoneyToWallet };
  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export { WalletContext, WalletProvider };
