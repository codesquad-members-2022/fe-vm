import Layout from "Pages/Layout/Layout";
import VendingMachine from "Pages/VendingMachine/VendingMachine";
import Wallet from "Pages/Wallet/Wallet";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlertMessageProvider from "Context/AlertMessageProvider";
import InvestMentProvider from "Context/InvestmentProvider";
import WalletMoneyProvider from "Context/WalletMoneyProvider";
import OrderTimerProvider from "Context/OrderInProgressProvider";
import MessageListProvider from "Context/MessageListProvider";
import GlobalStyle from "Common/globalStyle";
import NotFound from "Pages/NotFound/NotFound";

import { composeProvider } from "Helper/utils";
import InvestmentTimerProvider from "Context/InvestmentTimerProvider";

const providerList = [
  WalletMoneyProvider,
  InvestMentProvider,
  AlertMessageProvider,
  MessageListProvider,
  InvestMentProvider,
  OrderTimerProvider,
  InvestmentTimerProvider,
];

const Provider = composeProvider(providerList);

export default function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Layout />}>
              <Route path="/" element={<VendingMachine />} />
              <Route path="/wallet" element={<Wallet />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}
