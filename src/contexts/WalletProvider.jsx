import React, { createContext, useCallback, useEffect, useMemo, useReducer } from "react";
import MY_WALLET from "constants/myWallet";
import { API } from "utils";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "DECREASE":
      const decreasedCoins = state.map((coin) => {
        return coin.id === action.targetId ? { ...coin, count: coin.count - 1 } : coin;
      });

      return decreasedCoins;

    default:
      throw Error("WalletProvider Invalid Type");
  }
};

const WalletProvider = ({ children }) => {
  const [wallet, dispatch] = useReducer(reducer, []);

  const fetchMyWallet = async () => {
    const { data: moneyData } = await API.getMyWallet();

    const initMoney = moneyData.map((moneyItem, index) => {
      return { ...moneyItem, count: MY_WALLET[index].count };
    });

    dispatch({ type: "INIT", data: initMoney });
  };

  const onPushCoin = useCallback((targetId) => {
    dispatch({ type: "DECREASE", targetId });
  }, []);

  const dispatches = useMemo(() => {
    return {
      onPushCoin,
    };
  }, [onPushCoin]);

  useEffect(() => {
    fetchMyWallet();
  }, []);

  return (
    <WalletStateContext.Provider value={wallet}>
      <WalletDispatchContext.Provider value={dispatches}>{children}</WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  );
};

export const WalletStateContext = createContext();
export const WalletDispatchContext = createContext();
export default WalletProvider;
