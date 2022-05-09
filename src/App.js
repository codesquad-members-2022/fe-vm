import React from 'react';
import styled from 'styled-components';
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
    <AppWrapper>
      <UiChangeBtn />
      <VendingMachine />
      {/* <Wallet /> */}
    </AppWrapper>
  );
};

export default App;
