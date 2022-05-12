/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import { delay } from 'utils';

export const MoneyContext = React.createContext();

const defaultMoney = 0;
const defaultErrorMsg = '';

function App() {
  const [curMoney, setMoney] = useState(defaultMoney);
  const [errorMsg, setErrorMsg] = useState(defaultErrorMsg);

  return (
    <MoneyContext.Provider value={{ curMoney, setMoney, showErrorMsg }}>
      <BrowserRouter>
        <Nav>
          <Link to="/">자판기</Link>
          <Link to="wallet">지갑</Link>
        </Nav>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="wallet" element={<Wallet />} />
        </Routes>
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </BrowserRouter>
    </MoneyContext.Provider>
  );
  async function showErrorMsg(msg) {
    setErrorMsg(msg);
    const DELAY_MS = 3000;
    await delay(DELAY_MS);
    setErrorMsg('');
  }
}

export default App;

const Nav = styled.nav({
  display: 'flex',
  gap: '10px',
});
const ErrorMsg = styled.div({
  padding: '10px',
});
