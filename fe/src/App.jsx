import { WALLET_API } from 'Helper/constant';
import useFetch from 'Hooks/useFetch';
import Layout from 'Pages/Layout/Layout';
import VendingMachine from 'Pages/VendingMachine/VendingMachine';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const WalletMoneyContext = React.createContext({});
export const SetWalletMoneyContext = React.createContext(() => {});

export default function App() {
  const [walletMoney, setWalletMoney] = useFetch(WALLET_API);

  return (
    <SetWalletMoneyContext.Provider value={setWalletMoney}>
      <WalletMoneyContext.Provider value={walletMoney}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<VendingMachine />} />
              <Route path="/wallet" element={<VendingMachine />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WalletMoneyContext.Provider>
    </SetWalletMoneyContext.Provider>
  );
}
