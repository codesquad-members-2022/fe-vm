import { createContext, useReducer, useCallback, useContext } from 'react';
import { useLogState } from './LogContext';

import WALLET_MONEY_DATA from 'mock/Wallet';
import calculateTotalMoney from 'utils/calculateTotalMoney';

const initState = {
  walletMoneyData: WALLET_MONEY_DATA,
  insertMoneyData: 0,
};

export const MoneyContext = createContext(initState);

export const MoneyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moneyReducer, initState);

  return <MoneyContext.Provider value={{ state, dispatch }}>{children}</MoneyContext.Provider>;
};

const moneyReducer = (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'BUTTON_INSERT_MONEY':
      const updateWalletMoney = state.walletMoneyData.map(money => {
        return money.unit === action.payload ? { ...money, amount: money.amount - 1 } : money;
      });

      const updateMachineMoney = state.insertMoneyData + action.payload;

      return { walletMoneyData: updateWalletMoney, insertMoneyData: updateMachineMoney };
    case 'INPUT_INSERT_MONEY':
      const updateWalletMoney2 = newState.walletMoneyData.map(money => {
        action.payload.forEach(el => {
          el.unit === money.unit && (money = { ...money, amount: money.amount - el.amount });
        });

        return money;
      });

      const updateMachineMoney2 = newState.insertMoneyData + calculateTotalMoney(action.payload);

      return { walletMoneyData: updateWalletMoney2, insertMoneyData: updateMachineMoney2 };
    case 'BUY_PRODUCT':
      const updateInsertMoney = state.insertMoneyData - action.payload;

      return { ...state, insertMoneyData: updateInsertMoney };
    case 'RETURN_MONEY':
      const getChange = newState.walletMoneyData.map(money => {
        action.payload.forEach(el => {
          el.unit === money.unit && (money = { ...money, amount: money.amount + el.amount });
        });
        return money;
      });

      return { walletMoneyData: getChange, insertMoneyData: 0 };
    default:
      throw new Error();
  }
};

export function useMoneyState() {
  const { state, dispatch } = useContext(MoneyContext);
  const { insertMoneyLog, buyProductLog, returnMoneyLog } = useLogState();

  if (!state) throw new Error();

  const buttonInsertMoney = useCallback(money => {
    dispatch({
      type: 'BUTTON_INSERT_MONEY',
      payload: money.unit,
    });
    insertMoneyLog([{ ...money, amount: 1 }]);
  }, []);

  const inputInsertMoney = useCallback(money => {
    dispatch({
      type: 'INPUT_INSERT_MONEY',
      payload: money,
    });
    insertMoneyLog(money);
  }, []);

  const buyProduct = useCallback(product => {
    dispatch({
      type: 'BUY_PRODUCT',
      payload: product.price,
    });

    buyProductLog(product.name);
  }, []);

  const returnMoney = useCallback(money => {
    dispatch({
      type: 'RETURN_MONEY',
      payload: money,
    });
    returnMoneyLog(money);
  }, []);

  return {
    walletMoneyData: state.walletMoneyData,
    insertMoneyData: state.insertMoneyData,
    buttonInsertMoney,
    inputInsertMoney,
    buyProduct,
    returnMoney,
  };
}
