import React, { createContext, useCallback, useEffect, useMemo, useReducer } from "react";
import moneyData from "mocks/moneyData";
import MY_WALLET from "constants/myWallet";

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      return action.data;

    case "PUSH_COIN":
      const decreasedCoins = state.map((coin) => {
        return coin.id === action.targetId ? { ...coin, count: coin.count - 1 } : coin;
      });

      return decreasedCoins;

    default:
      throw Error("WalletProvider action.type error");
  }
};

const WalletProvider = ({ children }) => {
  const [wallet, dispatch] = useReducer(reducer, []);

  const fetchMyWallet = () => {
    const initData = moneyData.map((moneyItem, index) => {
      return { ...moneyItem, count: MY_WALLET[index].count };
    });

    dispatch({ type: "INIT", data: initData });
  };

  const onPushCoin = useCallback((targetId) => {
    dispatch({ type: "PUSH_COIN", targetId });
  }, []);

  const dispatches = useMemo(() => {
    return {
      onPushCoin,
    };
  }, []);

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
