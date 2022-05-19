/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import COINS from 'mocks/coins';
import { delay } from 'utils';
import DELAY_MS from 'constants/delay';

export const MoneyContext = React.createContext();
export const ErrorContext = React.createContext();
export const CoinContext = React.createContext();
export const LoadingContext = React.createContext();
export const EventLogContext = React.createContext();

function App() {
  const [curMoney, setMoney] = useState(0);
  const [errorMsg, setErrorMsg] = useState('');
  const [coins, setCoins] = useState(COINS);
  const [isLoading, setLoading] = useState(false);
  const [eventLog, setEventLog] = useState([]);

  return (
    <ErrorContext.Provider value={{ showErrorMsg }}>
      <MoneyContext.Provider value={{ curMoney, setMoney }}>
        <CoinContext.Provider value={{ coins, setCoins }}>
          <LoadingContext.Provider value={{ isLoading, setLoading }}>
            <EventLogContext.Provider value={{ eventLog, setEventLog }}>
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
            </EventLogContext.Provider>
          </LoadingContext.Provider>
        </CoinContext.Provider>
      </MoneyContext.Provider>
    </ErrorContext.Provider>
  );

  // TODO: 에러 메세지 컴포넌트로 만들기 <Loading /> 처럼
  async function showErrorMsg(msg) {
    setErrorMsg(msg);
    await delay(DELAY_MS.ERROR_MSG);
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
