import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import VendingMachine from './pages/VendingMachine';
import Wallet from './pages/Wallet';
import Button from './components/Button';

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">
            <Button icon="자판기" />
          </Link>
        </li>
        <li>
          <Link to="/wallet">
            <Button icon="지갑" />
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/wallet" element={<Wallet />} />
      </Routes>
    </BrowserRouter>
  );
}
