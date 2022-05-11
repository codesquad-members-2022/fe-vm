/* eslint-disable react/jsx-no-constructed-context-values */
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LINK_STYLE, Nav } from 'components/App.style';

export const MoneyContext = React.createContext();
const defaultMoney = 0;

function App() {
  const [curMoney, setMoney] = useState(defaultMoney);

  return (
    <MoneyContext.Provider value={{ curMoney, setMoney }}>
      <BrowserRouter>
        <Nav>
          <Link to="/" style={LINK_STYLE}>
            자판기
          </Link>
          <Link to="wallet" style={LINK_STYLE}>
            지갑
          </Link>
        </Nav>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </MoneyContext.Provider>
  );
}

export default App;
