import React, { useContext, memo } from 'react';
import styled, { css } from 'styled-components';

import { ACTION, VMContext } from '@/Provider/VMProvider';
import { Flexbox } from '@/utils/style';

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
        <InsertButton as="button" onClick={onClickInsertButton}>
          {amount}원
        </InsertButton>
      </Amount>
      <Count>{count}개</Count>
      <IncrementButton as="button" onClick={onClickIncrementButton}>
        +
      </IncrementButton>
    </CoinLayer>
  );
});

const WalletLayout = styled.main`
  ${Flexbox};
`;

const WalletLayer = styled.div``;

const CoinList = styled.ol``;

const Balance = styled.div`
  ${Flexbox};
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  margin: 20px auto 0;
`;

const CoinLayer = styled.li`
  ${Flexbox};
  min-width: 200px;
  & + & {
    margin-top: 20px;
  }
`;

const Amount = styled.div`
  flex-grow: 1;
`;

const Count = styled.div`
  ${Flexbox};
  padding: 10px;
  min-width: 70px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 999px;
  margin-left: 10px;
`;

const buttonCommonStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: all 400ms;
  height: 55px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.darkBlack};
  }
`;

const InsertButton = styled.button`
  ${Flexbox};
  ${buttonCommonStyle};
  width: 150px;
`;

const IncrementButton = styled.button`
  ${Flexbox};
  ${buttonCommonStyle};
  font-size: 30px;
  font-weight: bold;
  width: 55px;
  border-radius: 999px;
  margin-left: 5px;
`;

export default Wallet;
