import { StyledItemContainer, StyledItemName, StyledItemPrice } from './itemBox.styled';
import { getWonTemplate, delay } from '../../../helper/utils';
import { useContext, useState, useEffect } from 'react';
import { InputMoneyContext, LogContext, PaybackContext, ProgressContext } from '../vendingMachine';

export function ItemBox({ item }) {
  const { inputMoney, setInputMoney } = useContext(InputMoneyContext);
  const { setLogList } = useContext(LogContext);
  const { inProgress, setInProgress } = useContext(ProgressContext);
  const { setPaybackState } = useContext(PaybackContext);
  const [boxColor, setBoxColor] = useState('gray');
  const [itemStock, setItemStock] = useState(item.stock);
  const ITEM_DROP_TIME = 2000;

  useEffect(() => {
    if (!itemStock) {
      logSoldOut();
    }
  }, [itemStock]);

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
    logChooseItem();

    // 2초 뒤 아이템 드랍
    delay(ITEM_DROP_TIME).then(() => {
      dropItem();
      setInProgress(false);
      setPaybackState(true);
    });
  }

  function logChooseItem() {
    const log = `${item.name} 선택됨.`;
    setLogList(logList => [...logList, log]);
  }

  function logSoldOut() {
    const log = `${item.name} 품절됨.`;
    setLogList(logList => [...logList, log]);
  }

  function printInputMoney() {
    const setValue = inputMoney - item.price;
    setInputMoney(setValue);
  }

  function dropItem() {
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
