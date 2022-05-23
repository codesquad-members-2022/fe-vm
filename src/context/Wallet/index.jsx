import { dispatchAction } from 'context/Wallet/action';
import reducer from 'context/Wallet/reducer';
import React, { createContext, useEffect, useReducer } from 'react';

const initState = {
  walletData: [],
  sumOfMoney: 0,
  sumOfInsertedMoney: 0,
};

const WalletContext = createContext(initState);

const WalletProvider = ({ children }) => {
  const [state, walletDispatch] = useReducer(reducer, initState);
  const { initWallet } = dispatchAction;

  useEffect(() => {
    initWallet(walletDispatch);
  }, []);

  const value = {
    state,
    walletDispatch,
    ...dispatchAction,
  };

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
};

export { WalletContext, WalletProvider };
