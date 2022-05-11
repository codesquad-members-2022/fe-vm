import React, { useContext } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';
import Coin from 'components/Coin';
import COINS from 'mock/coins';

function MoneyCharge() {
  const { curMoney } = useContext(MoneyContext);
  return (
    <Wrap>
      <Coins />
      <Total>
        <Money>{curMoney}</Money>
        <Unit>원</Unit>
      </Total>
    </Wrap>
  );
}

function Coins() {
  return COINS.map(({ AMOUNT, CNT }) => (
    <Coin key={`${AMOUNT}`} amount={AMOUNT} cnt={CNT} />
  ));
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
const Money = styled.div({});
const Unit = styled.div({});

export default MoneyCharge;
