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

  const insertMoney = id => async () => {
    const money = state.wallet.find(money => money.id === id);
    if (!money.quantity) return;
    const updatedMoney = await walletApi.changeMoneyQuantity({
      id,
      data: { quantity: money.quantity - 1 },
    });
    dispatch({ type: 'INSERT_MONEY', payload: { updatedMoney: [updatedMoney] } });
  };

  const insertMoneyWithInput = async toBeInserted => {
    toBeInserted = Object.entries(toBeInserted);
    const updatedMoney = await walletApi.changeMoneyQuantity({
      data: getUpdatedMoney(toBeInserted),
    });
    dispatch({ type: 'INSERT_MONEY', payload: { updatedMoney: updatedMoney } });
  };

  const getUpdatedMoney = toBeInserted => {
    let data = [];
    toBeInserted.sort((a, b) => b[0] - a[0]);

    for (const [unit, quantity] of toBeInserted) {
      const money = state.wallet.find(money => money.unit === Number(unit));

      if (money.quantity - quantity >= 0) {
        data.push({ id: money.id, quantity: money.quantity - quantity });
      } else {
        let id = money.id + 1;
        while (id <= state.wallet.length) {
          const currentQuantity =
            data.find(item => item.id === id)?.quantity || state.wallet[id - 1].quantity;
          if (currentQuantity > 0) {
            data = data.filter(item => item.id > id);
            data.push({ id, quantity: currentQuantity - 1 });
            return data;
          }
          id++;
        }
        return data;
      }
    }
    return data;
  };

  const spendMoney = productPrice => {
    dispatch({ type: 'SPEND_MONEY', payload: { productPrice } });
  };

  const refundMoney = async toBeRefunded => {
    const data = state.wallet
      .filter(money => toBeRefunded[money.unit])
      .map(money => {
        return { ...money, quantity: money.quantity + toBeRefunded[money.unit] };
      });
    await walletApi.changeMoneyQuantity({ data });
    dispatch({ type: 'REFUND_MONEY', payload: { toBeRefunded } });
  };

  useEffect(() => {
    getAllMoney();
  }, []);

  const value = {
    state,
    options,
    getAllMoney,
    insertMoney,
    spendMoney,
    insertMoneyWithInput,
    refundMoney,
  };

  return <MoneyContext.Provider value={value}>{children}</MoneyContext.Provider>;
};

export { MoneyContext, MoneyProvider };
