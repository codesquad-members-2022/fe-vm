import React, { useEffect, useReducer } from 'react';

import moneyReducer, { init } from '@context/money/reducer';
import { walletApi } from '@lib/api';

const MoneyContext = React.createContext();

const MoneyProvider = ({ initialState, children }) => {
  const [state, dispatch] = useReducer(moneyReducer, initialState, init);

  const options = state?.wallet.map(item => {
    return {
      id: item.id,
      value: item.unit,
      label: `${item.unit}원`,
    };
  });

  const getAllMoney = async () => {
    const wallet = await walletApi.getAllMoney();
    dispatch({ type: 'INIT_MONEY', payload: { wallet, insertedMoney: 0 } });
  };

  const changeMoneyQuantity = id => async () => {
    const money = state.wallet.find(money => money.id === id);
    if (!money.quantity) return;
    const updatedMoney = await walletApi.reduceMoneyQuantity({
      id,
      data: { quantity: money.quantity - 1 },
    });
    dispatch({ type: 'INSERT_MONEY', payload: { updatedMoney: [updatedMoney] } });
  };

  const spendMoney = productPrice => {
    dispatch({ type: 'SPEND_MONEY', payload: { productPrice } });
  };

  useEffect(() => {
    getAllMoney();
  }, []);

  const value = { state, options, getAllMoney, changeMoneyQuantity, spendMoney };
  return <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>;
};

export { MoneyContext, MoneyProvider };
