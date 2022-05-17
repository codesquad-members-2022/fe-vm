import React, { useContext, useReducer } from 'react';

import moneyData from 'mocks/moneyData';

import { LogContext } from './LogProvider';

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

const calcWalletMoney = ({
  targetMoney,
  insertedMoney,
  inputMoney,
  walletMoney,
}) => {
  let myInputMoney = inputMoney;
  const sortedWallet = sortByAmountWallet(walletMoney);
  const newInsertedMoney = { ...insertedMoney };

  const newWallet = sortedWallet.map((moneyInfo, idx) => {
    const amount = moneyAmount[idx];
    let newCount = moneyInfo.count;
    for (let i = 0; i < moneyInfo.count; i++) {
      const nextInputMoney = myInputMoney + amount;
      const curDiff = Math.abs(targetMoney - myInputMoney);
      const nextDiff = Math.abs(targetMoney - nextInputMoney);
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
  return {
    inputMoney: myInputMoney,
    walletMoney: newWallet,
    insertedMoney: newInsertedMoney,
  };
};

const getCoinsByAmount = (amount) => {
  let changedAmount = amount;
  return moneyAmount.reduce((acc, nextAmount) => {
    const amountCount = Math.floor(changedAmount / nextAmount);
    acc[nextAmount] = amountCount > 0 ? amountCount : 0;
    if (amountCount > 0 && changedAmount > 0) {
      changedAmount -= amountCount * nextAmount;
    }
    return acc;
  }, {});
};

const getSortedInsertedMoney = (insertedMoney) =>
  Object.entries(insertedMoney)
    .sort((a, b) => b[0] - a[0])
    .map(([key, val]) => [+key, +val]);

const getRestCoins = (newInserted) => {
  const firstMinusCountIdx = newInserted.findIndex(([, count]) => count < 0);
  const restCoins = newInserted.slice(firstMinusCountIdx, newInserted.length);
  const sumRestCoins = restCoins.reduce((sum, next) => {
    const [amount, count] = next;
    return sum + amount * count;
  }, 0);
  const isSumOverZero = sumRestCoins >= 0;
  if (!isSumOverZero) {
    let tempSumRestCoins = sumRestCoins;
    for (let i = 1; i <= firstMinusCountIdx; i++) {
      const biggerStartIdx = firstMinusCountIdx - i;
      const [amount, count] = newInserted[biggerStartIdx];
      for (let j = 0; j < count; j++) {
        tempSumRestCoins += amount;
        if (tempSumRestCoins >= 0) {
          const slicedInserted = newInserted.slice(
            biggerStartIdx + 1,
            newInserted.length
          );
          return [[amount, count - j], ...slicedInserted];
        }
      }
    }
  }
  return restCoins;
};

const getDiffInsertedMoney = (originInserted, minusInserted) => {
  const newMinusInserted = getSortedInsertedMoney(minusInserted);
  const newOriginInserted = getSortedInsertedMoney(originInserted);
  const newInserted = newOriginInserted.map(([amount, count], idx) => {
    const [, minusCount] = newMinusInserted[idx];
    return [amount, count - minusCount];
  });
  const restCoins = getRestCoins(newInserted);
  let tempSumRest = 0;
  const minusToZeroCoins = restCoins.map((coin) => {
    const [amount, count] = coin;
    const newCount = count < 0 ? 0 : count;
    if (count < 0) {
      tempSumRest += amount * count;
    }
    return [amount, newCount];
  });
  const pullingCoins = minusToZeroCoins.map((coin) => {
    const [amount, count] = coin;
    let newCount = count;
    while (newCount > 0 && tempSumRest < 0) {
      tempSumRest += amount;
      newCount -= 1;
    }
    return [amount, newCount];
  });

  const newReturnCoins = getCoinsByAmount(tempSumRest);

  const newRestCoins = pullingCoins.map((coin) => {
    const [amount, count] = coin;
    const returnCoinCount = newReturnCoins[amount];
    return [amount, count + returnCoinCount];
  });

  const newInsertedObj = Object.fromEntries(
    newRestCoins.sort((a, b) => a[0] - b[0])
  );

  const newRestCoinsObj = Object.fromEntries(
    newInserted.sort((a, b) => a[0] - b[0])
  );

  return {
    ...newRestCoinsObj,
    ...newInsertedObj,
  };
};

const initMoneyState = {
  inputMoney: 0,
  insertedMoney: initInsertedMoney,
  walletMoney: initMoneyData,
};

const moneyReducer = (state, { type, newState, inputMoney }) => {
  switch (type) {
    case 'CHANGE_ALL':
      return {
        ...state,
        ...newState,
      };
    case 'CHANGE_INPUT_MONEY':
      return {
        ...state,
        inputMoney,
      };
    default:
      return state;
  }
};

export const MoneyProvider = (props) => {
  const [, insertLog] = useContext(LogContext);
  const [moneyState, dispatchMoney] = useReducer(moneyReducer, initMoneyState);
  const { insertedMoney, walletMoney, inputMoney } = moneyState;

  const insertInputMoney = (targetMoney) => {
    const newState = calcWalletMoney({ targetMoney, ...moneyState });
    dispatchMoney({ type: 'CHANGE_ALL', newState });
    insertLog({
      type: 'insert',
      data: newState.inputMoney - inputMoney,
    });
  };

  const insertMoneyByClick = (count, amount) => {
    if (count === 0) return;
    const newInsertedMoney = { ...insertedMoney };
    const newWalletMoney = walletMoney.map((oMoney) => {
      if (amount === oMoney.amount) {
        newInsertedMoney[amount] += 1;
        return { ...oMoney, count: count - 1 };
      }
      return oMoney;
    });
    const newState = {
      inputMoney: inputMoney + amount,
      insertedMoney: newInsertedMoney,
      walletMoney: newWalletMoney,
    };
    dispatchMoney({ type: 'CHANGE_ALL', newState });
    insertLog({
      type: 'insert',
      data: amount,
    });
  };

  const returnInputMoney = () => {
    const newWalletMoney = walletMoney.map((money) => {
      const newMoney = {
        ...money,
        count: money.count + insertedMoney[money.amount],
      };
      return newMoney;
    });
    const newState = {
      inputMoney: 0,
      insertedMoney: initInsertedMoney,
      walletMoney: newWalletMoney,
    };
    dispatchMoney({ type: 'CHANGE_ALL', newState });
    insertLog({
      type: 'return',
      data: inputMoney,
    });
  };

  const buyVMItem = (itemAmount, name) => {
    const newInputMoney = inputMoney - itemAmount;
    const itemRequiredCoins = getCoinsByAmount(itemAmount);
    const newInsertedMoney = getDiffInsertedMoney(
      insertedMoney,
      itemRequiredCoins
    );
    const newState = {
      inputMoney: newInputMoney,
      insertedMoney: newInsertedMoney,
    };
    dispatchMoney({ type: 'CHANGE_ALL', newState });
    insertLog({
      type: 'select',
      data: name,
    });
  };

  const moneyInfo = {
    inputMoney,
    walletMoney,
    buyVMItem,
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
