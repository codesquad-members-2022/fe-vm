/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import COINS from 'mocks/coins';
import { delay } from 'utils';

export const MoneyContext = React.createContext();
export const ErrorContext = React.createContext();
export const CoinContext = React.createContext();
export const LoadingContext = React.createContext();

function App() {
  const [curMoney, setMoney] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [coins, setCoins] = useState(COINS);
  const [isLoading, setLoading] = useState(false);

  return (
    <ErrorContext.Provider value={{ showErrorMsg }}>
      <MoneyContext.Provider value={{ curMoney, setMoney }}>
        <CoinContext.Provider value={{ coins, setCoins }}>
          <LoadingContext.Provider value={{ isLoading, setLoading }}>
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
          </LoadingContext.Provider>
        </CoinContext.Provider>
      </MoneyContext.Provider>
    </ErrorContext.Provider>
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
