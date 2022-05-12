import React, { useState, createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GNB from 'layout/GNB/GNB';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import walletData from 'data/wallet';
import { Container } from 'App.style';

const WalletContext = createContext(null);

export default function App() {
  const useWalletState = useState(walletData);

  return (
    <WalletContext.Provider value={useWalletState}>
      <Container>
        <BrowserRouter>
          <GNB />
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </WalletContext.Provider>
  );
}

export { WalletContext };
