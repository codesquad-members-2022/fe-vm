import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

import { VMContext } from '@/Provider/VMProvider';

const Wallet = () => {
  const {
    state: { balance, coins },
    dispatch,
  } = useContext(VMContext);

  console.log(Object.values(coins));

  return (
    <WalletLayout>
      <WalletLayer>
        <CoinList>
          {Object.values(coins).map(({ id, amount, count }) => (
            <Coin key={id} amount={amount} count={count} />
          ))}
        </CoinList>
        <Balance>총{balance.toLocaleString()}원</Balance>
      </WalletLayer>
    </WalletLayout>
  );
};

const Coin = ({ amount, count }) => {
  return (
    <CoinLayer>
      <Amount>
        <InsertButton>{amount}원</InsertButton>
      </Amount>
      <Count>{count}개</Count>
      <IncrementButton>+</IncrementButton>
    </CoinLayer>
  );
};

const WalletLayout = styled.main`
  display: flex;
  justify-content: center;
`;

const WalletLayer = styled.div``;

const CoinList = styled.ol``;

const Balance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #000;
  margin: 20px auto 0;
`;

const CoinLayer = styled.li`
  display: flex;
  justify-content: center;
  min-width: 200px;
  & + & {
    margin-top: 20px;
  }
`;

const Amount = styled.div`
  flex-grow: 1;
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  min-width: 35px;
  height: 35px;
  border: 1px solid black;
  border-radius: 999px;
  margin-left: 10px;
`;

const buttonCommonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
  font-size: 16px;
  cursor: pointer;
  transition: all 200ms;

  &:hover {
    background-color: #00000022;
  }

  &:active {
    background-color: #00000011;
  }
`;

const InsertButton = styled.button`
  ${buttonCommonStyle}
  width: 100px;
  height: 35px;
`;

const IncrementButton = styled.button`
  ${buttonCommonStyle}
  width: 35px;
  height: 35px;
  border-radius: 999px;
  margin-left: 4px;
`;

export default Wallet;
