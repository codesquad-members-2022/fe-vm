import React from 'react';
import styled from 'styled-components';

function MoneyCharge() {
  return (
    <Wrap>
      <Coins>
        <Coin>10원</Coin>
        <Coin>50원</Coin>
        <Coin>1000원</Coin>
        <Coin>500원</Coin>
        <Coin>1000원</Coin>
        <Coin>5000원</Coin>
        <Coin>10000원</Coin>
      </Coins>
      <Counts>
        <Count>0개</Count>
        <Count>0개</Count>
        <Count>0개</Count>
        <Count>0개</Count>
        <Count>0개</Count>
        <Count>0개</Count>
        <Count>0개</Count>
      </Counts>
      <Total>
        <Money>10000</Money>
        <Unit>원</Unit>
      </Total>
    </Wrap>
  );
}

const Wrap = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 100px)',
  gap: '20px',
  marginTop: '20px',
});
const Coins = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
const Coin = styled.div({
  textAlign: 'center',
  border: '1px solid black',
  height: '50px',
  lineHeight: '50px',
});
const Counts = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
const Count = styled.div({
  textAlign: 'center',
  border: '1px solid black',
  height: '50px',
  lineHeight: '50px',
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
