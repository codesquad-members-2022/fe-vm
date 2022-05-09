import React from 'react';
import styled from 'styled-components';
import {VendingMachine} from './Component/Vending_machine';
import {Wallet} from './Component/Wallet';

const AppWrapper = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppWrapper>
      <VendingMachine />
      {/* <Wallet /> */}
    </AppWrapper>
  );
};

export default App;
