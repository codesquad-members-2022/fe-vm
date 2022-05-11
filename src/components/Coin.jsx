/* eslint-disable no-console */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';
import MESSAGES from 'messages';

function Coin({ amount, cnt }) {
  const { curMoney, setMoney, showErrorMsg } = useContext(MoneyContext);
  const [moneyCnt, setMoneyCnt] = useState(cnt);
  return (
    <Wrap>
      <Amount onClick={handleChargeMoney}>{amount}원</Amount>
      <Box>{moneyCnt}개</Box>
    </Wrap>
  );
  function handleChargeMoney() {
    const hasEnoughCoins = moneyCnt >= 1;
    if (!hasEnoughCoins) {
      showErrorMsg(MESSAGES.ERROR.NOT_ENOUGH_COINS);
      return;
    }
    setMoney(curMoney + amount);
    setMoneyCnt(moneyCnt - 1);
  }
}

export default Coin;

const Wrap = styled.div({
  display: 'flex',
  gap: '10px',
});
const Box = styled.div({
  width: '100px',
  height: '50px',
  textAlign: 'center',
  lineHeight: '50px',
  border: '1px solid black',
});
const Amount = styled(Box)({
  cursor: 'pointer',
});
