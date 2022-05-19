import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { VMProvider } from '@/Context/VMContext';
import { WalletProvider } from '@/Context/VMContext/WalletContext';
import { MachineProvider } from '@/Context/VMContext/MachineContext';
import { LogProvider } from '@/Context/VMContext/LogContext';
import Home from '@/routes/Home';
import Wallet from '@/routes/Wallet';
import { Flexbox } from '@/styles/util';

const Router = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Container>
        <NavBar />
        <VMProvider>
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
        </VMProvider>
      </Container>
    </BrowserRouter>
  );
};

const NavBar = () => {
  return (
    <NavBarLayer>
      <TabList>
        <Tab>
          <NavLink to="/">
            {({ isActive }) => (
              <StyledSpan className={isActive ? 'active' : undefined}>자판기</StyledSpan>
            )}
          </NavLink>
        </Tab>
        <Tab>
          <NavLink to="/wallet">
            {({ isActive }) => (
              <StyledSpan className={isActive ? 'active' : undefined}>지갑</StyledSpan>
            )}
          </NavLink>
        </Tab>
      </TabList>
    </NavBarLayer>
  );
};

const Container = styled.div`
  width: 1080px;
  margin: 30px auto;
`;

const NavBarLayer = styled.nav``;

const TabList = styled.ul`
  ${Flexbox};
  height: 50px;
  margin-bottom: 20px;
`;

const Tab = styled.li`
  & + & {
    margin-left: 8px;
  }
`;

const StyledSpan = styled.span`
  height: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.color.black};
  transition: all 400ms;

  &.active {
    background-color: ${({ theme }) => theme.color.black};
    color: ${({ theme }) => theme.color.white};
  }
`;

export default Router;
