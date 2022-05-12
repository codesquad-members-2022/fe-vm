import React from 'react';
import { Route, Routes } from 'react-router';
import Header from './Components/Header';
import VendingMachine from './Components/Contents/VendingMachine/index';
import Wallet from './Components/Contents/Wallet/index';

const MENU = {
  menu1: {
    title: 'Vending Machine',
    value: 'vending-machine',
  },
  menu2: {
    title: 'Wallet',
    value: 'wallet',
  },
};

function App() {
  return (
    <>
      <Header menu={MENU} />
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/vending-machine" element={<VendingMachine />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </>
  );
}

export default App;
