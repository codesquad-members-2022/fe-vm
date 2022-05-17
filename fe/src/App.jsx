import { WALLET_API } from "Helper/constant";
import useFetch from "Hooks/useFetch";
import { INVESTMENT_API } from "Helper/constant";
import Layout from "Pages/Layout/Layout";
import VendingMachine from "Pages/VendingMachine/VendingMachine";
import Wallet from "Pages/Wallet/Wallet";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlertMessageProvider from "Context/AlertMessageProvider";
import InvestMentProvider from "Context/InvestmentProvider";
import WalletMoneyProvider from "Context/WalletMoneyProvider";

export default function App() {
  const [walletMoney, setWalletMoney] = useFetch(WALLET_API);
  const [investment, setInvestment] = useFetch(INVESTMENT_API);
  const [alertMessage, setAlertMessage] = useState({});

  return (
    <WalletMoneyProvider state={walletMoney} setState={setWalletMoney}>
      <InvestMentProvider state={investment} setState={setInvestment}>
        <AlertMessageProvider state={alertMessage} setState={setAlertMessage}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/wallet" element={<Wallet />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </AlertMessageProvider>
      </InvestMentProvider>
    </WalletMoneyProvider>
  );
}
