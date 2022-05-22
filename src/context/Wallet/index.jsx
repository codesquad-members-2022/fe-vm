import { getWalletData } from 'api';
import API_URL from 'constants/apiUrl';
import getMockData from 'mock';
import React, { createContext, useEffect, useReducer } from 'react';

/* Provider */
const initState = {
  walletData: [],
  sumOfMoney: 0,
  insertedMoney: [],
  sumOfInsertedMoney: 0,
};

const WalletContext = createContext(initState);

const WalletProvider = ({ children }) => {
  const [state, walletDispatch] = useReducer(reducer, initState);

  useEffect(() => {
    initWallet(walletDispatch);
  }, []);

  const value = {
    state,
    insertMoney,
    walletDispatch,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

/* Type */
const INIT_WALLET = 'initWallet';
const INSERT_MONEY = 'insertMoney';

/* Dispatch Function */
const initWallet = async dispatch => {
  let walletData;
  try {
    walletData = await getWalletData();
  } catch (error) {
    const { wallet } = API_URL;
    walletData = getMockData(wallet);
  }
  dispatch({ type: INIT_WALLET, payload: { walletData } });
};

const insertMoney = (dispatch, insertedMoney) => {
  dispatch({ type: INSERT_MONEY, payload: { insertedMoney } });
};

/* action function */
const initWalletData = (state, payload) => {
  const { walletData } = payload;
  return { ...state, walletData, sumOfMoney: calcSumOfMoney(walletData) };
};

const calcSumOfMoney = walletData => {
  return walletData.reduce((acc, { value, count }) => acc + value * count, 0);
};

const setInsertMoneyData = (state, payload) => {
  const { walletData, sumOfMoney } = state;
  const { insertedMoney } = payload;
  const { usedMoneyData, usedSumOfMoney } = calcInsertedMoney(walletData, insertedMoney);

  const newWalletData = walletData.map((data, index) => {
    const { value, count } = data;
    const usedCount = usedMoneyData[value]?.count || 0;
    return { ...data, count: count - usedCount };
  });

  return {
    walletData: newWalletData,
    sumOfMoney: sumOfMoney - usedSumOfMoney,
    insertedMoney: usedMoneyData,
    sumOfInsertedMoney: usedSumOfMoney,
  };
};

const calcInsertedMoney = (walletData, insertedMoney) =>
  walletData.reduceRight(
    (acc, cur) => {
      const { usedMoneyData, usedSumOfMoney } = acc;
      const { value, count } = cur;

      if (insertedMoney < 10) {
        return acc;
      }

      let usedCount = parseInt(insertedMoney / value);
      usedCount = usedCount > count ? count : usedCount;
      insertedMoney -= usedCount * value;

      return {
        usedMoneyData: { ...usedMoneyData, [value]: { count: usedCount } },
        usedSumOfMoney: usedSumOfMoney + usedCount * value,
      };
    },
    { usedMoneyData: {}, usedSumOfMoney: 0 }
  );

/* Reducer */
const reducer = (state, { type, payload }) => actionFunc[type](state, payload);

const actionFunc = {
  [INIT_WALLET]: initWalletData,
  [INSERT_MONEY]: setInsertMoneyData,
};

export { WalletContext, WalletProvider };
