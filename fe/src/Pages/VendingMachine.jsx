import MessageScreen from 'Components/MessageScreen';
import MoneyScreenBoard from 'Components/MoneyScreenBoard';
import ProductScreenBoard from 'Components/ProductScreenBoard';
import { INVESTMENT_API } from 'Helper/constant';
import useFetch from 'Hooks/useFetch';
import React, { useState } from 'react';
import { Column, VendingMachineContainer } from './VendingMachine.styled';

export const InvestmentContext = React.createContext({});
export const SetInvestmentContext = React.createContext(() => {});
export const AlertMessage = React.createContext({});
export const SetAlertMessage = React.createContext(() => {});

export default function VendingMachine() {
  const [investment, setInvestment] = useFetch(INVESTMENT_API);
  const [alertMessage, setAlertMessage] = useState({});

  return (
    <SetInvestmentContext.Provider value={setInvestment}>
      <InvestmentContext.Provider value={investment}>
        <SetAlertMessage.Provider value={setAlertMessage}>
          <AlertMessage.Provider value={alertMessage}>
            <VendingMachineContainer flex direction="column">
              <Column flex>
                <ProductScreenBoard />
                <MoneyScreenBoard />
              </Column>
              <Column>
                <MessageScreen />
              </Column>
            </VendingMachineContainer>
          </AlertMessage.Provider>
        </SetAlertMessage.Provider>
      </InvestmentContext.Provider>
    </SetInvestmentContext.Provider>
  );
}
