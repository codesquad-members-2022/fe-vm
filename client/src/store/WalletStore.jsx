import React, { createContext, useState } from "react";
import moneyDB from "../moneyDB.json";
import { calculateTotal } from "utils/util";

export const WalletContext = createContext();

export default function WalletStore(props) {
  const [wallet, setWallet] = useState(moneyDB.wallet);
  const keys = Object.keys(wallet);

  const [total, setTotal] = useState(calculateTotal(keys, wallet));

  return (
    <WalletContext.Provider value={{ wallet, setWallet, total, setTotal }}>
      {props.children}
    </WalletContext.Provider>
  );
}
