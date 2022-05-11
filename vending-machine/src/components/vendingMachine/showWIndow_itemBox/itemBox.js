import { StyledItemContainer, StyledItemName, StyledItemPrice } from './itemBox.styled';
import { getWonTemplate, delay } from '../../../helper/utils';
import { useContext, useState } from 'react';
import { InputMoneyContext } from '../vendingMachine';

export function ItemBox({ item, inProgress, setInProgress }) {
  const { inputMoney, setInputMoney } = useContext(InputMoneyContext);
  const [boxColor, setBoxColor] = useState('gray');
  const [itemStock, setItemStock] = useState(item.stock);
  const ITEM_DROP_TIME = 2000;

  function handleClick() {
    if (!itemStock) return;
    if (item.price > inputMoney) return;
    if (inProgress) return;
    chooseItem();
  }

  function chooseItem() {
    setInProgress(true);
    setBoxColor('red');
    setItemStock(itemStock - 1);
    printInputMoney();

    delay(ITEM_DROP_TIME).then(() => {
      paybackMoney();
      setInProgress(false);
    });
  }

  function printInputMoney() {
    const setValue = inputMoney - item.price;
    setInputMoney(setValue);
  }

  function paybackMoney() {
    setBoxColor('gray');
  }

  return (
    <StyledItemContainer>
      <StyledItemName onClick={handleClick} boxColor={boxColor}>
        {item.name}
        {itemStock > 0 ? `` : <p>품절</p>}
      </StyledItemName>
      <StyledItemPrice>{getWonTemplate(Number(item.price))}</StyledItemPrice>
    </StyledItemContainer>
  );
}
