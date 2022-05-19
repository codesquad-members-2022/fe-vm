import React, { useContext, memo } from 'react';

import { RETURN_CHANGE_DELAY } from '@/constants/timer';
import { ACTION, VMContext } from '@/Context/VMContext';
import { LOG_ACTION, LogDispatch, useLog } from '@/Context/VMContext/LogContext';
import { MACHINE_ACTION, MachineDispatch, useMachine } from '@/Context/VMContext/MachineContext';
import { WALLET_ACTION, WalletDispatch, useWallet } from '@/Context/VMContext/WalletContext';

import * as S from './styles';

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
    <S.WalletLayout>
      <S.WalletLayer>
        <S.CoinList>
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
        </S.CoinList>
        <S.Balance>총 {wState.balance.toLocaleString()}원</S.Balance>
      </S.WalletLayer>
    </S.WalletLayout>
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
    <S.CoinLayer>
      <S.Amount>
        <S.InsertButton as="button" onClick={onClickInsertButton}>
          {amount}원
        </S.InsertButton>
      </S.Amount>
      <S.Count>{count}개</S.Count>
      <S.IncrementButton as="button" onClick={onClickIncrementButton}>
        +
      </S.IncrementButton>
    </S.CoinLayer>
  );
});

export default Wallet;
