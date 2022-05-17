import { createContext, useEffect, useState } from 'react';
import { itemData } from '../../db/data';
import { StyledVMContainer } from './vendingMachine.styled';
import { ShowWindow } from './showWindow/showWindow';
import { UserWindow } from './userWindow/userWindow';

export const InputMoneyContext = createContext(0);
export const LogContext = createContext([]);
export const PaybackContext = createContext(false);
export const ProgressContext = createContext(false);

export function VendingMachine() {
  const [itemList, setItemList] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);
  const [logList, setLogList] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [paybackState, setPaybackState] = useState(false);

  useEffect(() => {
    setItemList(itemData);
  }, []);

  return (
    <LogContext.Provider value={{ logList, setLogList }}>
      <InputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>
        <PaybackContext.Provider value={{ paybackState, setPaybackState }}>
          <ProgressContext.Provider value={{ inProgress, setInProgress }}>
            <StyledVMContainer>
              <ShowWindow itemList={itemList} />
              <UserWindow />
            </StyledVMContainer>
          </ProgressContext.Provider>
        </PaybackContext.Provider>
      </InputMoneyContext.Provider>
    </LogContext.Provider>
  );
}
