import { createContext, useEffect, useState } from 'react';
import { itemData } from '../../db/data';
import { StyledVMContainer } from './vendingMachine.styled';
import { ShowWindow } from './showWindow/showWindow';
import { UserWindow } from './userWindow/userWindow';

export const InputMoneyContext = createContext(0);
export const LogContext = createContext([]);
export const PaybackContext = createContext(false);
export const ProgressContext = createContext(false);
export const PaybackTimerContext = createContext(null);

export function VendingMachine() {
  const [itemList, setItemList] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);
  const [logList, setLogList] = useState([]);
  const [inProgress, setInProgress] = useState(false);
  const [paybackTimer, setPaybackTimer] = useState(null);

  useEffect(() => {
    setItemList(itemData);
  }, []);

  return (
    <LogContext.Provider value={{ logList, setLogList }}>
      <InputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>
        <ProgressContext.Provider value={{ inProgress, setInProgress }}>
          <PaybackTimerContext.Provider value={{ paybackTimer, setPaybackTimer }}>
            <StyledVMContainer>
              <ShowWindow itemList={itemList} />
              <UserWindow />
            </StyledVMContainer>
          </PaybackTimerContext.Provider>
        </ProgressContext.Provider>
      </InputMoneyContext.Provider>
    </LogContext.Provider>
  );
}
