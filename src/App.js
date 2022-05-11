import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import VendingMachine from './Components/Contents/VendingMachine/index';
import Wallet from './Components/Contents/Wallet/index';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}

export default App;
