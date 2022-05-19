import React, { useContext } from 'react';
import styled from 'styled-components';
import { ErrorContext, MoneyContext, CoinContext, EventLogContext } from 'components/App';
import { MESSAGES } from 'constants/messages';

function Coin({ coin, curWalletMoney, setCurWalletMoney }) {
  const { showErrorMsg } = useContext(ErrorContext);
  const { coins, setCoins } = useContext(CoinContext);
  const { curMoney, setMoney } = useContext(MoneyContext);
  const { eventLog, setEventLog } = useContext(EventLogContext);
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

    const updatedWalletMoney = curWalletMoney - AMOUNT;
    const updatedCurMoney = curMoney + AMOUNT;
    const updatedCoins = coins.map(updateCoinCnt);

    setCurWalletMoney(updatedWalletMoney);
    setMoney(updatedCurMoney);
    setCoins(updatedCoins);
    setEventLog([...eventLog, { type: 'CHARGE', value: AMOUNT }]);

    function updateCoinCnt(eachCoin) {
      const isTargetCoin = AMOUNT === eachCoin.AMOUNT;
      if (isTargetCoin) {
        return { AMOUNT, CNT: CNT - 1 };
      }
      return eachCoin;
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
