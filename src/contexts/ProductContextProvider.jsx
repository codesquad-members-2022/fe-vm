import React, { createContext, useReducer } from "react";
import myWallet from "data/myWallet.json";

const WalletStateContext = createContext();
const WalletDispatchContext = createContext();

const walletReducer = (state, action) => {};

const ProductContextProvider = ({ children }) => {
  console.log("myWallet", myWallet);
  const [wallet, dispatch] = useReducer(walletReducer, myWallet);
  return (
    <WalletStateContext.Provider>
      <WalletDispatchContext.Provider>{children}</WalletDispatchContext.Provider>
    </WalletStateContext.Provider>
  );
};

export default ProductContextProvider;
