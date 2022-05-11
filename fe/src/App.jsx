import { WALLET_API } from 'Helper/constant';
import useFetch from 'Hooks/useFetch';
import { INVESTMENT_API } from 'Helper/constant';
import Layout from 'Pages/Layout/Layout';
import VendingMachine from 'Pages/VendingMachine/VendingMachine';
import Wallet from 'Pages/Wallet/Wallet';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const InvestmentContext = React.createContext({});
export const SetInvestmentContext = React.createContext(() => {});
export const WalletMoneyContext = React.createContext({});
export const SetWalletMoneyContext = React.createContext(() => {});
export const AlertMessage = React.createContext({});
export const SetAlertMessage = React.createContext(() => {});

export default function App() {
  const [walletMoney, setWalletMoney] = useFetch(WALLET_API);
  const [investment, setInvestment] = useFetch(INVESTMENT_API);
  const [alertMessage, setAlertMessage] = useState({});

  return (
    <SetWalletMoneyContext.Provider value={setWalletMoney}>
      <WalletMoneyContext.Provider value={walletMoney}>
        <SetInvestmentContext.Provider value={setInvestment}>
          <InvestmentContext.Provider value={investment}>
            <SetAlertMessage.Provider value={setAlertMessage}>
              <AlertMessage.Provider value={alertMessage}>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route path="/" element={<VendingMachine />} />
                      <Route path="/wallet" element={<Wallet />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </AlertMessage.Provider>
            </SetAlertMessage.Provider>
          </InvestmentContext.Provider>
        </SetInvestmentContext.Provider>
      </WalletMoneyContext.Provider>
    </SetWalletMoneyContext.Provider>
  );
}
