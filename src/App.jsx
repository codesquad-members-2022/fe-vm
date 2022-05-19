import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GNB from 'layout/GNB/GNB';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import { Container } from 'App.style';
import { WalletProvider } from 'contexts/WalletProvider';
import { SelectedProductProvider } from 'contexts/SelectedProductProvider';
import { HistoryProvider } from 'contexts/HistoryProvider';
import { VMTimerProvider } from 'contexts/VMTimerProvider';

export default function App() {
  return (
    <WalletProvider>
      <SelectedProductProvider>
        <HistoryProvider>
          <VMTimerProvider>
            <Container>
              <BrowserRouter basename={process.env.PUBLIC_URL}>
                <GNB />
                <Routes>
                  <Route path="/" element={<VendingMachine />} />
                  <Route path="/wallet" element={<Wallet />} />
                </Routes>
              </BrowserRouter>
            </Container>
          </VMTimerProvider>
        </HistoryProvider>
      </SelectedProductProvider>
    </WalletProvider>
  );
}
