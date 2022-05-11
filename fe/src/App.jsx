import { WALLET_API } from 'Helper/constant';
import useFetch from 'Hooks/useFetch';
import VendingMachine from 'Pages/VendingMachine';
import React from 'react';

export const WalletMoneyContext = React.createContext({});
export const SetWalletMoneyContext = React.createContext(() => {});

export default function App() {
  const [walletMoney, setWalletMoney] = useFetch(WALLET_API);

  return (
    <SetWalletMoneyContext.Provider value={setWalletMoney}>
      <WalletMoneyContext.Provider value={walletMoney}>
        <VendingMachine />
      </WalletMoneyContext.Provider>
    </SetWalletMoneyContext.Provider>
  );
}
