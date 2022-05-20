import React, { memo } from 'react';

import { RETURN_MONEY_DELAY } from '@/constants/timer';
import { LOG_ACTION, useLog } from '@/Context/VMContext/LogContext';
import { MACHINE_ACTION, useMachine } from '@/Context/VMContext/MachineContext';
import { ICoin, useWallet, WALLET_ACTION } from '@/Context/VMContext/WalletContext';
import { useTimer } from '@/hooks/useTimer';

import * as S from './styles';

interface CoinProps {
  coin: ICoin;
  index: number;
}

const Wallet = () => {
  const {
    wallet: { state: walletState },
  } = useWallet();

  return (
    <S.WalletLayout>
      <S.WalletLayer>
        <S.CoinList>
          {walletState.coins.map((coin, index) => (
            <Coin key={coin.id} coin={coin} index={index} />
          ))}
        </S.CoinList>
        <S.Balance>총 {walletState.balance.toLocaleString()}원</S.Balance>
      </S.WalletLayer>
    </S.WalletLayout>
  );
};

const Coin = memo(({ coin, index }: CoinProps) => {
  const { amount, count } = coin;
  const {
    wallet: { dispatch: walletDispatch },
  } = useWallet();
  const { state: machineState, dispatch: machineDispatch } = useMachine();
  const { state: logState, dispatch: logDispatch } = useLog();
  const [setTimer, clearTimer] = useTimer('insertMoney');

  const onClickInsertButton = () => {
    if (count === 0) {
      return;
    }

    // NOTE: walletState: 코인개수, balance 업데이트
    // NOTE: machineState: totalInputAmount 업데이트
    // NOTE: logState: log 업데이트

    walletDispatch({ type: WALLET_ACTION.INSERT_COIN, payload: { amount, count, index } });
    machineDispatch({ type: MACHINE_ACTION.INSERT_MONEY, payload: { amount } });
    logDispatch({ type: LOG_ACTION.INSERT_MONEY, payload: { amount } });
    setTimer(() => {
      const returnAmount = machineState.totalInputAmount + amount;
      machineDispatch({ type: MACHINE_ACTION.RETURN_MONEY });
      // walletDispatch({ type: WALLET_ACTION.RETURN_COINS})
      logDispatch({ type: LOG_ACTION.RETURN_MONEY, payload: { amount: returnAmount } });
    }, RETURN_MONEY_DELAY);
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
    walletDispatch({ type: WALLET_ACTION.INCREMENT_COIN, payload: { amount, count, index } });
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
