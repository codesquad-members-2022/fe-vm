import { useEffect, useState } from 'react';
import { itemData } from '../../db/data';
import { StyledVMContainer } from './vendingMachine.styled';
import { ShowWindow } from './showWindow/showWindow';
import { UserWindow } from './userWindow/userWindow';

export function VendingMachine() {
  const [itemList, setItemList] = useState([]);
  const [inputMoney, setInputMoney] = useState(0);

  useEffect(() => {
    setItemList(itemData);
  }, []);

  return (
    <StyledVMContainer>
      <ShowWindow itemList={itemList} />
      <UserWindow inputMoney={inputMoney} setInputMoney={setInputMoney} />
    </StyledVMContainer>
  );
}
