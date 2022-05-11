import MessageScreen from 'Components/MessageScreen';
import MoneyScreenBoard from 'Components/MoneyScreenBoard';
import ProductScreenBoard from 'Components/ProductScreenBoard';
import { INVESTMENT_API } from 'Helper/constant';
import useFetch from 'Hooks/useFetch';
import React from 'react';
import { Column, VendingMachineContainer } from './VendingMachine.styled';

export const InvestmentContext = React.createContext({});
export const SetInvestmentContext = React.createContext(() => {});

export default function VendingMachine() {
  const [investment, setInvestment] = useFetch(INVESTMENT_API);

  return (
    <SetInvestmentContext.Provider value={setInvestment}>
      <InvestmentContext.Provider value={investment}>
        <VendingMachineContainer flex direction="column">
          <Column flex>
            <ProductScreenBoard />
            <MoneyScreenBoard />
          </Column>
          <Column>
            <MessageScreen />
          </Column>
        </VendingMachineContainer>
      </InvestmentContext.Provider>
    </SetInvestmentContext.Provider>
  );
}
