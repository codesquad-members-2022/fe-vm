import React, { useState } from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router';
import VendingMachine from './Contents/VendingMachine/index';
import Wallet from './Contents/Wallet/index';

export const contentsContext = createContext(0);

export default function MainContents() {
  const [payTotal, setPayTotal] = useState(0);
  const [printMessages, setPrintMessages] = useState([]);

  return (
    <contentsContext.Provider
      value={{ payTotal, setPayTotal, printMessages, setPrintMessages }}
    >
      <Routes path="/">
        <Route index element={<VendingMachine />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </contentsContext.Provider>
  );
}
