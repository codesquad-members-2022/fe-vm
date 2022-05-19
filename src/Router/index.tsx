import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { LogProvider } from '@/Context/VMContext/LogContext';
import { MachineProvider } from '@/Context/VMContext/MachineContext';
import { WalletProvider } from '@/Context/VMContext/WalletContext';
import Home from '@/routes/Home';
import Wallet from '@/routes/Wallet';

import * as S from './styles';

const Index = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <S.Container>
        <NavBar />
        <LogProvider>
          <MachineProvider>
            <WalletProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wallet" element={<Wallet />} />
              </Routes>
            </WalletProvider>
          </MachineProvider>
        </LogProvider>
      </S.Container>
    </BrowserRouter>
  );
};

const NavBar = () => {
  return (
    <S.NavBarLayer>
      <S.TabList>
        <S.Tab>
          <NavLink to="/">
            {({ isActive }) => (
              <S.StyledSpan className={isActive ? 'active' : undefined}>자판기</S.StyledSpan>
            )}
          </NavLink>
        </S.Tab>
        <S.Tab>
          <NavLink to="/wallet">
            {({ isActive }) => (
              <S.StyledSpan className={isActive ? 'active' : undefined}>지갑</S.StyledSpan>
            )}
          </NavLink>
        </S.Tab>
      </S.TabList>
    </S.NavBarLayer>
  );
};

export default Index;
