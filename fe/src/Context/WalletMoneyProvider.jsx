import React from "react";

export const WalletMoneyContext = React.createContext({});
export const SetWalletMoneyContext = React.createContext(() => {});

export default function WalletMoneyProvider({ state, setState, children }) {
  return (
    <SetWalletMoneyContext.Provider value={setState}>
      <WalletMoneyContext.Provider value={state}>{children}</WalletMoneyContext.Provider>
    </SetWalletMoneyContext.Provider>
  );
}
