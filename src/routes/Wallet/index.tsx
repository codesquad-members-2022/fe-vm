import React, { useContext, memo } from 'react';
import styled, { css } from 'styled-components';

import { RETURN_CHANGE_DELAY } from '@/constants/timer';
import { ACTION, VMContext } from '@/Context/VMContext';
import { LOG_ACTION, LogDispatch, useLog } from '@/Context/VMContext/LogContext';
import { MACHINE_ACTION, MachineDispatch, useMachine } from '@/Context/VMContext/MachineContext';
import { WALLET_ACTION, WalletDispatch, useWallet } from '@/Context/VMContext/WalletContext';
import { Flexbox } from '@/styles/util';

const Wallet = () => {
  const {
    state: { balance, coins },
    dispatch,
  } = useContext(VMContext);

  const {
    wallet: { state: wState, dispatch: wDispatch },
  } = useWallet();

  const { state: mState, dispatch: mDispatch } = useMachine();
  const { state: lState, dispatch: lDispatch } = useLog();

  return (
    <WalletLayout>
      <WalletLayer>
        <CoinList>
          {wState.coins.map((coin, index) => (
            <Coin
              key={coin.id}
              {...coin}
              index={index}
              dispatch={dispatch}
              wDispatch={wDispatch}
              mDispatch={mDispatch}
              lDispatch={lDispatch}
            />
          ))}
        </CoinList>
        <Balance>총 {wState.balance.toLocaleString()}원</Balance>
      </WalletLayer>
    </WalletLayout>
  );
};

const Coin = memo(({ amount, count, index, dispatch, wDispatch, mDispatch, lDispatch }) => {
  const onClickInsertButton = () => {
    if (count === 0) {
      return;
    }

    // NOTE: wState: 코인개수, balance 업데이트
    // NOTE: mState: totalInputAmount 업데이트
    // NOTE: lState: log 업데이트

    wDispatch({ type: WALLET_ACTION.INSERT_COIN, payload: { amount, count, index } });
    mDispatch({ type: MACHINE_ACTION.INSERT_MONEY, payload: { amount } });
    lDispatch({ type: LOG_ACTION.INSERT_MONEY, payload: { amount } });

    // dispatch({
    //   type: ACTION.INSERT_COIN,
    //   payload: {
    //     amount,
    //     count,
    //     index,
    //   },
    // });

    // dispatch({
    //   type: ACTION.SET_TIMER,
    //   payload: {
    //     key: 'returnChange',
    //     delay: RETURN_CHANGE_DELAY,
    //     callback: () => {
    //       dispatch({ type: ACTION.RETURN_CHANGE });
    //     },
    //   },
    // });
  };

  const onClickIncrementButton = () => {
    // dispatch({
    //   type: ACTION.INCREMENT_COIN,
    //   payload: {
    //     amount,
    //     count,
    //     index,
    //   },
    // });
    wDispatch({ type: WALLET_ACTION.INCREMENT_COIN, payload: { amount, count, index } });
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
  border: 1px solid ${({ theme }) => theme.color.black};
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
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 999px;
  margin-left: 10px;
`;

const buttonCommonStyle = css`
  border: 1px solid ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.base};
  cursor: pointer;
  transition: all 400ms;
  height: 55px;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.darkBlack};
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
