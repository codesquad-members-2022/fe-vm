import React, { useState } from 'react';

import moneyData from 'mocks/moneyData';

const moneyAmount = [10000, 5000, 1000, 500, 100, 50, 10];

const initMoneyData = moneyData;
const initInsertedMoney = moneyAmount.reduce((acc, amount) => {
  acc[amount] = 0;
  return acc;
}, {});

export const MoneyContext = React.createContext();

const sortByAmountWallet = (wallet) =>
  [...wallet].sort(
    ({ amount: amountA }, { amount: amountB }) => amountB - amountA
  );

const calcWalletMoney = (target, insertedMoney, inputMoney, wallet) => {
  let myInputMoney = inputMoney;
  const sortedWallet = sortByAmountWallet(wallet);
  const newInsertedMoney = { ...insertedMoney };

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
      newInsertedMoney[amount] += 1;
      myInputMoney = nextInputMoney;
    }
    return {
      ...moneyInfo,
      count: newCount,
    };
  });
  return [myInputMoney, newWallet, newInsertedMoney];
};

export const MoneyProvider = (props) => {
  const [inputMoney, setInputMoney] = useState(0);
  const [walletMoney, setWalletMoney] = useState(initMoneyData);
  const [insertedMoney, setInsertedMoney] = useState(initInsertedMoney);

  const insertInputMoney = (newInsert) => {
    const [calcMoney, newWallet, newInsertedMoney] = calcWalletMoney(
      newInsert,
      insertedMoney,
      inputMoney,
      walletMoney
    );
    setInsertedMoney(newInsertedMoney);
    setInputMoney(calcMoney);
    setWalletMoney(newWallet);
    return calcMoney;
  };

  const insertMoneyByClick = (count, amount) => {
    if (count === 0) return;
    const newInsertedMoney = { ...insertedMoney };
    const newMoney = walletMoney.map((oMoney) => {
      if (amount === oMoney.amount) {
        newInsertedMoney[amount] += 1;
        return { ...oMoney, count: count - 1 };
      }
      return oMoney;
    });
    setInsertedMoney(newInsertedMoney);
    setInputMoney(inputMoney + amount);
    setWalletMoney(newMoney);
  };

  const returnInputMoney = () => {
    const newWalletMoney = walletMoney.map((money) => {
      const newMoney = {
        ...money,
        count: money.count + insertedMoney[money.amount],
      };
      return newMoney;
    });
    setWalletMoney(newWalletMoney);
    setInsertedMoney(initInsertedMoney);
    setInputMoney(0);
  };

  const moneyInfo = {
    walletMoney,
    setWalletMoney,
    inputMoney,
    setInputMoney,
    insertInputMoney,
    insertMoneyByClick,
    returnInputMoney,
  };

  return (
    <MoneyContext.Provider value={moneyInfo}>
      {props.children}
    </MoneyContext.Provider>
  );
};
