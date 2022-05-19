/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { ErrorContext, MoneyContext } from 'components/App';
import MESSAGES from 'constants/messages';

function Coin({
  coin,
  coinIdx,
  curWalletMoney,
  setCurWalletMoney,
  handleCoinCount,
}) {
  const { showErrorMsg } = useContext(ErrorContext);
  const { curMoney, setMoney } = useContext(MoneyContext);
  const { AMOUNT, CNT } = coin;

  return (
    <Wrap>
      <Amount onClick={handleChargeMoney}>{AMOUNT}원</Amount>
      <Box>{CNT}개</Box>
    </Wrap>
  );

  function handleChargeMoney() {
    const hasCoins = CNT >= 1;
    if (!hasCoins) {
      showErrorMsg(MESSAGES.ERROR.NOT_ENOUGH_COINS);
      return;
    }
    chargeMoneyFromWallet();

    function chargeMoneyFromWallet() {
      const updatedWalletMoney = curWalletMoney - AMOUNT;
      const updatedCurMoney = curMoney + AMOUNT;
      setCurWalletMoney(updatedWalletMoney);
      setMoney(updatedCurMoney);
      handleCoinCount(coinIdx);
    }
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
