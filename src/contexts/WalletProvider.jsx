import React, { createContext, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import myWallet from "mocks/myWallet";
import { calcTotalMoney } from "helpers/calculateMoney";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "INSERT_COIN":
      const usedCoinState = state.map((coin) => {
        return coin.id === action.targetId ? { ...coin, count: --coin.count } : coin;
      });
      return usedCoinState;

    default:
      return state;
  }
};

const WalletProvider = ({ children }) => {
  const [wallet, dispatch] = useReducer(reducer, []);
  const [coinSum, setCoinSum] = useState(0);

  const fetchMyWallet = () => {
    // FIXME 로컬에서 import 해 온 값
    const initData = myWallet;
    dispatch({ type: "INIT", data: initData });
  };

  const onInsertCoin = useCallback((targetId) => {
    dispatch({ type: "INSERT_COIN", targetId });
  }, []);

  useEffect(() => {
    fetchMyWallet();
  }, []);

  useEffect(() => {
    setCoinSum(() => calcTotalMoney(wallet));
  }, [wallet]);

  const state = { wallet, coinSum };

  const dispatches = useMemo(() => {
    return { onInsertCoin };
  }, []);

  return (
    <WalletStateContext.Provider value={state}>
      <WalletDispatchContext.Provider value={dispatches}>{children}</WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  );
};

export const WalletStateContext = createContext();
export const WalletDispatchContext = createContext();
export default WalletProvider;
