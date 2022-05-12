import React, { useContext, memo } from 'react';
import styled, { css } from 'styled-components';

import { ACTION, VMContext } from '@/Provider/VMProvider';

const Wallet = () => {
  const {
    state: { balance, coins },
    dispatch,
  } = useContext(VMContext);

  return (
    <WalletLayout>
      <WalletLayer>
        <CoinList>
          {coins.map(({ id, amount, count }, index) => (
            <Coin key={id} amount={amount} count={count} dispatch={dispatch} index={index} />
          ))}
        </CoinList>
        <Balance>총 {balance.toLocaleString()}원</Balance>
      </WalletLayer>
    </WalletLayout>
  );
};

const Coin = memo(({ amount, count, dispatch, index }) => {
  const onClickInsertButton = () => {
    if (count === 0) {
      return;
    }

    dispatch({
      type: ACTION.INSERT_COIN,
      payload: {
        amount,
        count,
        index,
      },
    });
  };

  const onClickIncrementButton = () => {
    dispatch({
      type: ACTION.INCREMENT_COIN,
      payload: {
        amount,
        count,
        index,
      },
    });
  };

  return (
    <CoinLayer>
      <Amount>
        <InsertButton onClick={onClickInsertButton}>{amount}원</InsertButton>
      </Amount>
      <Count>{count}개</Count>
      <IncrementButton onClick={onClickIncrementButton}>+</IncrementButton>
    </CoinLayer>
  );
});

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
    background-color: #0002;
  }

  &:active {
    background-color: #0001;
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
