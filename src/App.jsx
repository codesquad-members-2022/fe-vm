import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GNB from 'components/GNB';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import 'App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GNB />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
