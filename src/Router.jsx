import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { VMProvider } from '@/Provider/VMProvider';
import Home from '@/routes/Home';
import Wallet from '@/routes/Wallet';

const Container = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const NavBar = styled.nav``;

const TabList = styled.ul`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tab = styled.li`
  & + & {
    margin-left: 4px;
  }
`;

const StyledSpan = styled.span`
  height: 100%;
  padding: 8px;
  border: 1px solid #000;
  transition: all 250ms;

  &.active {
    background-color: #000;
    color: #fff;
  }
`;

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <NavBar>
          <TabList>
            <Tab>
              <NavLink to="/">
                {({ isActive }) => (
                  <StyledSpan className={isActive ? 'active' : null}>자판기</StyledSpan>
                )}
              </NavLink>
            </Tab>
            <Tab>
              <NavLink to="/wallet">
                {({ isActive }) => (
                  <StyledSpan className={isActive ? 'active' : null}>지갑</StyledSpan>
                )}
              </NavLink>
            </Tab>
          </TabList>
        </NavBar>
        <VMProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </VMProvider>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
