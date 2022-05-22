import { getWalletData } from 'api';
import API_URL from 'constants/apiUrl';
import getMockData from 'mock';
import React, { createContext, useEffect, useReducer } from 'react';

/* Provider */
const initState = {
  walletData: [],
  sumOfMoney: 0,
  insertedMoney: {},
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
    walletDispatch,
    insertMoney,
    returnMoney,
    spendMoney,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

/* Type */
const INIT_WALLET = 'initWallet';
const INSERT_MONEY = 'insertMoney';
const RETURN_MONEY = 'returnMoney';
const SPEND_MONEY = 'spendMoney';

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

const insertMoney = (dispatch, insertedValue) => {
  dispatch({ type: INSERT_MONEY, payload: { insertedValue } });
};

const returnMoney = dispatch => {
  dispatch({ type: RETURN_MONEY });
};

const spendMoney = (dispatch, cost) => {
  dispatch({ type: SPEND_MONEY, payload: { cost } });
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
  const { walletData, sumOfMoney, sumOfInsertedMoney } = state;
  const { insertedValue } = payload;
  const { usedMoneyData, usedSumOfMoney } = calcInsertedMoney(walletData, insertedValue);

  const newWalletData = walletData.map(data => {
    const { value, count } = data;
    return { ...data, count: count - (usedMoneyData[value] || 0) };
  });

  return {
    walletData: newWalletData,
    sumOfMoney: sumOfMoney - usedSumOfMoney,
    sumOfInsertedMoney: sumOfInsertedMoney + usedSumOfMoney,
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

      if (usedCount === 0) {
        return acc;
      }

      return {
        usedMoneyData: { ...usedMoneyData, [value]: usedCount },
        usedSumOfMoney: usedSumOfMoney + usedCount * value,
      };
    },
    { usedMoneyData: {}, usedSumOfMoney: 0 }
  );

const setReturnMoney = state => {
  const { walletData, sumOfMoney, sumOfInsertedMoney } = state;
  let insertedMoney = sumOfInsertedMoney;

  const newWalletData = walletData.reduceRight((acc, cur) => {
    const { value, count } = cur;
    const returnCount = parseInt(insertedMoney / value);
    insertedMoney -= value * returnCount;
    acc.push({ ...cur, count: count + returnCount });
    return acc;
  }, []);

  return {
    walletData: newWalletData.reverse(),
    sumOfMoney: sumOfMoney + sumOfInsertedMoney,
    sumOfInsertedMoney: 0,
  };
};

const setSpendMoney = (state, payload) => {
  const { sumOfInsertedMoney } = state;
  const { cost } = payload;
  return { ...state, sumOfInsertedMoney: sumOfInsertedMoney - cost };
};

/* Reducer */
const reducer = (state, { type, payload }) => actionFunc[type](state, payload) || state;

const actionFunc = {
  [INIT_WALLET]: initWalletData,
  [INSERT_MONEY]: setInsertMoneyData,
  [RETURN_MONEY]: setReturnMoney,
  [SPEND_MONEY]: setSpendMoney,
};

export { WalletContext, WalletProvider };
