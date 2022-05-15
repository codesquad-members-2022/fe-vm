import { createContext, useReducer, useState } from 'react';
import WALLET_MONEY_DATA from 'mock/Wallet';
import calculateTotalMoney from 'utils/calculateTotalMoney';

const initState = {
  walletMoneyData: WALLET_MONEY_DATA,
  insertMoneyData: 0,
  inputValue: '',
};

export const MoneyContext = createContext(initState);

export const MoneyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moneyReducer, initState);
  const [inputValue, setInputValue] = useState('');

  const buttonInsertMoney = money => {
    dispatch({
      type: 'BUTTON_INSERT_MONEY',
      payload: money,
    });
  };

  const inputInsertMoney = money => {
    dispatch({
      type: 'INPUT_INSERT_MONEY',
      payload: money,
    });
  };

  return (
    <MoneyContext.Provider
      value={{
        walletMoneyData: state.walletMoneyData,
        insertMoneyData: state.insertMoneyData,
        inputValue,
        setInputValue,
        buttonInsertMoney,
        inputInsertMoney,
      }}
    >
      {children}
    </MoneyContext.Provider>
  );
};

const moneyReducer = (state, action) => {
  switch (action.type) {
    case 'BUTTON_INSERT_MONEY':
      const updateWalletMoney = state.walletMoneyData.map(money => {
        return money.unit === action.payload
          ? (money = { ...money, amount: --money.amount })
          : money;
      });

      const updateMachineMoney = state.insertMoneyData + action.payload;

      return { walletMoneyData: updateWalletMoney, insertMoneyData: updateMachineMoney };
    case 'INPUT_INSERT_MONEY':
      const updateWalletMoney2 = state.walletMoneyData.map(money => {
        action.payload.forEach(el => {
          el.id === money.id && (money = { ...money, amount: money.amount - el.amount });
        });

        return money;
      });

      const updateMachineMoney2 = state.insertMoneyData + calculateTotalMoney(action.payload);

      return { walletMoneyData: updateWalletMoney2, insertMoneyData: updateMachineMoney2 };
    case 'RETURN_MONEY':
      return;
    default:
      return state;
  }
};
