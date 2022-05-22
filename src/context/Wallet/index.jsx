import { getWalletData } from 'api';
import API_URL from 'constants/apiUrl';
import getMockData from 'mock';
import React, { createContext, useEffect, useReducer } from 'react';

/* Provider */
const initState = {
  walletData: [],
  sumOfMoney: 0,
  insertedMoney: 0,
};

const WalletContext = createContext(initState);

const WalletProvider = ({ children }) => {
  const [state, walletDispatch] = useReducer(reducer, initState);

  useEffect(() => {
    initWallet(walletDispatch);
  }, []);

  return <WalletContext.Provider value={{ state, walletDispatch }}>{children}</WalletContext.Provider>;
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

/* action function */
const initWalletData = (state, payload) => {
  const { walletData } = payload;
  return { ...state, sumOfMoney: calcSumOfMoney(walletData), walletData };
};

const calcSumOfMoney = walletData => {
  return walletData.reduce((acc, { value, count }) => acc + value * count, 0);
};

/* Reducer */
const reducer = (state, { type, payload }) => actionFunc[type](state, payload);

const actionFunc = {
  [INIT_WALLET]: initWalletData,
};

export { WalletContext, WalletProvider };
