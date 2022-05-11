import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

import {UserAccountContext} from './Store';
import {VendingMachine} from './Component/Vending_machine';
import {Wallet} from './Component/Wallet';
import {UiChangeBtn} from './Component/Toggle';

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
          <UiChangeBtn />
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/wallet" element={<Wallet />} />
          </Routes>
        </UserAccountContext>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
