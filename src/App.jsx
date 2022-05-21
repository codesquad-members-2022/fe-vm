import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { compose } from 'helpers/helper';
import GNB from 'layout/GNB/GNB';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import { Container } from 'App.style';
import { WalletProvider } from 'contexts/WalletProvider';
import { FinalPayProvider } from 'contexts/FinalPayProvider';
import { SelectedProductProvider } from 'contexts/SelectedProductProvider';
import { HistoryProvider } from 'contexts/HistoryProvider';
import { VMTimerProvider } from 'contexts/VMTimerProvider';

export default function App() {
  const Provider = compose([
    WalletProvider,
    FinalPayProvider,
    SelectedProductProvider,
    HistoryProvider,
    VMTimerProvider
  ]);

  return (
    <Provider>
      <Container>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <GNB />
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Provider>
  );
}
