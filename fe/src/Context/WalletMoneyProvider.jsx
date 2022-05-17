import { WALLET_API } from "Helper/constant";
import useFetch from "Hooks/useFetch";
import React from "react";

export const WalletMoneyContext = React.createContext({});
export const SetWalletMoneyContext = React.createContext(() => {});

export default function WalletMoneyProvider({ children }) {
  const [walletMoney, setWalletMoney] = useFetch(WALLET_API);

  return (
    <SetWalletMoneyContext.Provider value={setWalletMoney}>
      <WalletMoneyContext.Provider value={walletMoney}>{children}</WalletMoneyContext.Provider>
    </SetWalletMoneyContext.Provider>
  );
}
