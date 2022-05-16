import React, { useState } from 'react';
import styled from 'styled-components';
import Coin from 'components/Coin';
import COINS from 'mocks/coins';

function MoneyCharge() {
  const [coins, setCoins] = useState(COINS);
  const defaultWalletMoney = coins.reduce(
    (prev, coin) => prev + coin.AMOUNT * coin.CNT,
    0,
  );
  const [curWalletMoney, setCurWalletMoney] = useState(defaultWalletMoney);
  return (
    <Wrap>
      <Coins />
      <Total>
        <div>{curWalletMoney}</div>
        <div>원</div>
      </Total>
    </Wrap>
  );
  function Coins() {
    return coins.map((coin, idx) => (
      <Coin
        key={`${coin.AMOUNT}`}
        coin={coin}
        coinIdx={idx}
        curWalletMoney={curWalletMoney}
        setCurWalletMoney={setCurWalletMoney}
        handleCoinCount={handleCoinCount}
      />
    ));
  }
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
