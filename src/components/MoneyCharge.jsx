import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import Coins from 'components/Coins';
import { CoinContext } from 'components/App';
import getTotalMoneyOfCoins from 'components/utils';

function MoneyCharge() {
  const { coins } = useContext(CoinContext);
  const defaultWalletMoney = getTotalMoneyOfCoins(coins);
  const [curWalletMoney, setCurWalletMoney] = useState(defaultWalletMoney);
  return (
    <Wrap>
      <Coins
        coins={coins}
        curWalletMoney={curWalletMoney}
        setCurWalletMoney={setCurWalletMoney}
      />
      <Total>
        <div>{curWalletMoney}</div>
        <div>원</div>
      </Total>
    </Wrap>
  );
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
