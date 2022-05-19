import React from 'react';
import { Route, Routes } from 'react-router';
import { MessageProvider } from '../Context/MessageProvider';
import VendingMachine from './Contents/VendingMachine/index';
import Wallet from './Contents/Wallet/index';

export default function MainContents() {
  return (
    <MessageProvider>
      <Routes path="/">
        <Route index element={<VendingMachine />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </MessageProvider>
  );
}
