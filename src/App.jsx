import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import VendingMachine from 'pages/VendingMachine';
import Wallet from 'pages/Wallet';
import 'App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/">자판기</Link>
          <Link to="/wallet">지갑</Link>
        </nav>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
