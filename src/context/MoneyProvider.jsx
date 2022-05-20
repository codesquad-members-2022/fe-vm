import React, { useContext, useReducer } from 'react';

import { getCoinsByAmount, getDiffInsertedMoney } from 'common/vmServices';
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
  isCounting: false,
};

const moneyReducer = (
  state,
  { type, count, amount, inputMoney, walletMoney, insertedMoney }
) => {
  switch (type) {
    case 'INSERT_INPUT_MONEY': {
      return {
        ...state,
        inputMoney,
        walletMoney,
        insertedMoney,
      };
    }
    case 'INSERT_MONEY_BY_CLICK': {
      const newInsertedMoney = { ...state.insertedMoney };
      const newWalletMoney = state.walletMoney.map((oMoney) => {
        if (amount === oMoney.amount) {
          newInsertedMoney[amount] += 1;
          return { ...oMoney, count: count - 1 };
        }
        return oMoney;
      });
      const newState = {
        ...state,
        inputMoney: state.inputMoney + amount,
        insertedMoney: newInsertedMoney,
        walletMoney: newWalletMoney,
      };
      return newState;
    }
    case 'RETURN_INPUT_MONEY': {
      const newWalletMoney = state.walletMoney.map((money) => {
        const newMoney = {
          ...money,
          count: money.count + state.insertedMoney[money.amount],
        };
        return newMoney;
      });
      const newState = {
        ...state,
        inputMoney: 0,
        insertedMoney: initInsertedMoney,
        walletMoney: newWalletMoney,
      };
      return newState;
    }
    case 'BUY_VM_ITEM': {
      const newInputMoney = state.inputMoney - amount;
      const itemRequiredCoins = getCoinsByAmount(amount);
      const newInsertedMoney = getDiffInsertedMoney(
        state.insertedMoney,
        itemRequiredCoins
      );
      const newState = {
        ...state,
        inputMoney: newInputMoney,
        insertedMoney: newInsertedMoney,
      };
      return newState;
    }
    default:
      return state;
  }
};

export const MoneyProvider = (props) => {
  const [moneyState, dispatchMoney] = useReducer(moneyReducer, initMoneyState);
  const [, insertLog] = useContext(LogContext);

  const insertInputMoney = (newState) => {
    dispatchMoney({ type: 'INSERT_INPUT_MONEY', ...newState });
    insertLog({
      type: 'insert',
      data: newState.inputMoney - moneyState.inputMoney,
    });
  };

  const insertMoneyByClick = (count, amount) => {
    if (count === 0) return;
    dispatchMoney({
      type: 'INSERT_MONEY_BY_CLICK',
      count,
      amount,
    });
    insertLog({
      type: 'insert',
      data: amount,
    });
  };

  const returnInputMoney = () => {
    dispatchMoney({ type: 'RETURN_INPUT_MONEY' });
    insertLog({
      type: 'return',
      data: moneyState.inputMoney,
    });
  };

  const buyVMItem = (amount, name) => {
    dispatchMoney({ type: 'BUY_VM_ITEM', amount });
    insertLog({
      type: 'select',
      data: name,
    });
  };

  const moneyInfo = {
    moneyState,
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
