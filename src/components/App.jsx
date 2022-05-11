/* eslint-disable react/jsx-no-constructed-context-values */
import Home from 'pages/Home';
import Wallet from 'pages/Wallet';
import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { LINK_STYLE, Nav } from 'components/App.style';
import styled from 'styled-components';
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
        <ErrorMsg>{errorMsg}</ErrorMsg>
      </BrowserRouter>
    </MoneyContext.Provider>
  );
  async function showErrorMsg(msg) {
    setErrorMsg(msg);
    await delay(3000);
    setErrorMsg('');
  }
}

export default App;

const ErrorMsg = styled.div({
  padding: '10px',
});
