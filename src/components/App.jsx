import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LINK_STYLE, Nav } from 'components/App.style';

function App() {
  return (
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
  );
}

export default App;
