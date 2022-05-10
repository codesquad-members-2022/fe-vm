import { useEffect, useState } from 'react';
import { itemData } from '../../db/data';
import { StyledVMContainer } from './vendingMachine.styled';
import { ShowWindow } from './showWindow/showWindow';

export function VendingMachine() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    setItemList(itemData);
  }, []);

  return (
    <StyledVMContainer>
      <ShowWindow itemList={itemList} />
      {/*<UserTerminal />*/}
    </StyledVMContainer>
  );
}
