import { StyledItemContainer, StyledItemName, StyledItemPrice } from './itemBox.styled';
import { getWonTemplate, delay } from '../../../helper/utils';
import { useContext, useState, useEffect } from 'react';
import { InputMoneyContext, LogContext, PaybackTimerContext, ProgressContext } from '../vendingMachine';
import { PAYBACK_TIME } from '../../../common/constants';

export function ItemBox({ item }) {
  const { inputMoney, setInputMoney } = useContext(InputMoneyContext);
  const { setLogList } = useContext(LogContext);
  const { inProgress, setInProgress } = useContext(ProgressContext);
  const { paybackTimer, setPaybackTimer } = useContext(PaybackTimerContext);

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
    logChooseItem();
    stopPaybackTimer();

    // 2초 뒤 아이템 드랍
    delay(ITEM_DROP_TIME).then(() => {
      dropItem();
      printInputMoney();
      setItemStock(itemStock => itemStock - 1);
      setInProgress(false);
    });
  }

  function stopPaybackTimer() {
    if (paybackTimer !== null) {
      setPaybackTimer(timer => clearTimeout(timer));
    }
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
    setInputMoney(inputMoney => inputMoney - item.price);
  }

  function dropItem() {
    setBoxColor('gray');
    const log = `${item.name} 덜커덩!`;
    setLogList(logList => [...logList, log]);
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
