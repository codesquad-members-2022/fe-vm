/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ErrorContext } from 'components/App';
import MESSAGES from 'constants/messages';

function Coin({
  coin,
  coinIdx,
  curWalletMoney,
  setCurWalletMoney,
  handleCoinCount,
}) {
  const { showErrorMsg } = useContext(ErrorContext);

  return (
    <Wrap>
      <Amount onClick={handleChargeMoney}>{coin.AMOUNT}원</Amount>
      <Box>{coin.CNT}개</Box>
    </Wrap>
  );
  function handleChargeMoney() {
    const hasCoins = coin.CNT >= 1;
    if (!hasCoins) {
      showErrorMsg(MESSAGES.ERROR.NOT_ENOUGH_COINS);
      return;
    }
    setCurWalletMoney(curWalletMoney - coin.AMOUNT);
    handleCoinCount(coinIdx);
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
