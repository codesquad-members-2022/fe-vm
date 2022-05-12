import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import {UserAccountContext} from '../Store';
import {Home, VendingMachine, Wallet, NotFound} from '../Pages';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <UserAccountContext>
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="vendingMachine" element={<VendingMachine />} />
              <Route path="wallet" element={<Wallet />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserAccountContext>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
