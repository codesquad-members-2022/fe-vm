import React, { useState } from 'react';

import moneyData from 'mocks/moneyData';

const moneyAmount = [10000, 5000, 1000, 500, 100, 50, 10];
const initMoneyData = moneyData;

export const MoneyContext = React.createContext();

const sortByAmountWallet = (wallet) =>
  [...wallet].sort(
    ({ amount: amountA }, { amount: amountB }) => amountB - amountA
  );
const calcWalletMoney = (target, inputMoney, wallet) => {
  let myInputMoney = inputMoney;
  const sortedWallet = sortByAmountWallet(wallet);

  const newWallet = sortedWallet.map((moneyInfo, idx) => {
    const amount = moneyAmount[idx];
    let newCount = moneyInfo.count;
    for (let i = 0; i < moneyInfo.count; i++) {
      const nextInputMoney = myInputMoney + amount;
      const curDiff = Math.abs(target - myInputMoney);
      const nextDiff = Math.abs(target - nextInputMoney);
      if (nextDiff >= curDiff) {
        break;
      }
      newCount -= 1;
      myInputMoney = nextInputMoney;
    }
    return {
      ...moneyInfo,
      count: newCount,
    };
  });
  return [myInputMoney, newWallet];
};

export const MoneyProvider = (props) => {
  const [inputMoney, setInputMoney] = useState(0);
  const [walletMoney, setWalletMoney] = useState(initMoneyData);

  const insertInputMoney = (insertedMoney) => {
    const [calcMoney, newWallet] = calcWalletMoney(
      insertedMoney,
      inputMoney,
      walletMoney
    );
    setInputMoney(calcMoney);
    setWalletMoney(newWallet);
    return calcMoney;
  };

  const moneyInfo = {
    walletMoney,
    setWalletMoney,
    inputMoney,
    setInputMoney,
    insertInputMoney,
  };

  return (
    <MoneyContext.Provider value={moneyInfo}>
      {props.children}
    </MoneyContext.Provider>
  );
};
