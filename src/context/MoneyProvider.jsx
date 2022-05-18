import React, { useContext, useReducer } from 'react';

import {
  calcWalletMoney,
  getCoinsByAmount,
  getDiffInsertedMoney,
} from 'common/vmServices';
import moneyData from 'mocks/moneyData';

import { LogContext } from './LogProvider';

const moneyAmount = [10000, 5000, 1000, 500, 100, 50, 10];

const initMoneyData = moneyData;
const initInsertedMoney = moneyAmount.reduce((acc, amount) => {
  acc[amount] = 0;
  return acc;
}, {});

export const MoneyContext = React.createContext();

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
