import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GNB from 'layout/GNB/GNB';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import { Container } from 'App.style';

export default function App() {
  return (
    <Container>
      <BrowserRouter>
        <GNB />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}
