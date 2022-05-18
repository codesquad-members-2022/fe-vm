import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Coins from 'components/Coins';
import { CoinContext } from 'components/App';

function MoneyCharge() {
  const { coins, setCoins } = useContext(CoinContext);
  const defaultWalletMoney = coins.reduce(
    (prev, coin) => prev + coin.AMOUNT * coin.CNT,
    0,
  );
  const [curWalletMoney, setCurWalletMoney] = useState(defaultWalletMoney);
  return (
    <Wrap>
      <Coins
        coins={coins}
        curWalletMoney={curWalletMoney}
        setCurWalletMoney={setCurWalletMoney}
        handleCoinCount={handleCoinCount}
      />
      <Total>
        <div>{curWalletMoney}</div>
        <div>원</div>
      </Total>
    </Wrap>
  );
  function handleCoinCount(coinIdx) {
    const newCoins = coins.map((coin, idx) => {
      const isTargetCoin = idx === coinIdx;
      if (isTargetCoin) {
        return { AMOUNT: coin.AMOUNT, CNT: coin.CNT - 1 };
      }
      return coin;
    });
    setCoins(newCoins);
  }
}

const Wrap = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '200px',
  gap: '20px',
  marginTop: '20px',
});

const Total = styled.div({
  width: '100%',
  textAlign: 'end',
  gridColumnStart: 'span 2',
  display: 'flex',
  border: '1px solid black',
  height: '50px',
  lineHeight: '50px',
});

export default MoneyCharge;
