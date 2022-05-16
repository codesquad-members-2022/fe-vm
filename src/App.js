import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import {Home, VendingMachine, Wallet, NotFound} from './Pages';

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
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<VendingMachine />} />
            <Route path="vendingMachine" element={<VendingMachine />} />
            <Route path="wallet" element={<Wallet />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
