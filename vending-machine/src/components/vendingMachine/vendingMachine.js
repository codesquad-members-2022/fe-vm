import { createContext, useEffect, useState } from 'react';
import { itemData } from '../../db/data';
import { StyledVMContainer } from './vendingMachine.styled';
import { ShowWindow } from './showWindow/showWindow';
import { UserWindow } from './userWindow/userWindow';

export const InputMoneyContext = createContext();
export const LogContext = createContext();

export function VendingMachine() {
  const [itemList, setItemList] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);
  const [logList, setLogList] = useState([]);

  useEffect(() => {
    setItemList(itemData);
  }, []);

  return (
    <LogContext.Provider value={{ logList, setLogList }}>
      <InputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>
        <StyledVMContainer>
          <ShowWindow itemList={itemList} />
          <UserWindow />
        </StyledVMContainer>
      </InputMoneyContext.Provider>
    </LogContext.Provider>
  );
}
