import { createContext, useEffect, useState } from 'react';
import { itemData } from '../../db/data';
import { StyledVMContainer } from './vendingMachine.styled';
import { ShowWindow } from './showWindow/showWindow';
import { UserWindow } from './userWindow/userWindow';

export const InputMoneyContext = createContext();

export function VendingMachine() {
  const [itemList, setItemList] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);

  useEffect(() => {
    setItemList(itemData);
  }, []);

  return (
    <InputMoneyContext.Provider value={{ inputMoney, setInputMoney }}>
      <StyledVMContainer>
        <ShowWindow itemList={itemList} />
        <UserWindow />
      </StyledVMContainer>
    </InputMoneyContext.Provider>
  );
}
