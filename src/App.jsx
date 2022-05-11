import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import VendingMachinePage from './VendingMachinePage';
import WalletPage from './WalletPage';

export default function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">
            <button type="button">자판기</button>
          </Link>
        </li>
        <li>
          <Link to="/wallet">
            <button type="button">지갑</button>
          </Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<VendingMachinePage />} />
        <Route path="/wallet" element={<WalletPage />} />
      </Routes>
    </BrowserRouter>
  );
}
