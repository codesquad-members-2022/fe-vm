import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import { RETURN_MONEY_DELAY } from '@/constants/timer';
import { LOG_ACTION, LogDispatch, useLog } from '@/Context/VMContext/LogContext';
import { MACHINE_ACTION, useMachine } from '@/Context/VMContext/MachineContext';
import {
  useWallet,
  WALLET_ACTION,
  WalletDispatch,
  ICalInputToCoins,
  IWallet,
} from '@/Context/VMContext/WalletContext';
import { useTimer } from '@/hooks/useTimer';

import * as S from './styles';

export interface InputControllerProps {
  className: string;
}

export interface InputFormProps {
  walletDispatch: WalletDispatch;
  logDispatch: LogDispatch;
  calInputToCoins: ICalInputToCoins;
  setIsSubmitted: Dispatch<SetStateAction<boolean>>;
  wallet: IWallet;
}

// NOTE: Wallet -> 동전수, 총금액 업데이트
// NOTE: Machine -> 금액 투입, 금액 반환
// NOTE: Log -> 로그 업데이트
const InputController = ({ className }: InputControllerProps) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(true);
  const {
    wallet: { state: walletState, dispatch: walletDispatch },
    calInputToCoins,
    calReturnToCoins,
  } = useWallet();
  const { state: machineState, dispatch: machineDispatch } = useMachine();
  const { dispatch: logDispatch } = useLog();
  const [, clearTimer] = useTimer('insertMoney');

  const onClickInputAmount = () => {
    setIsSubmitted(false);
  };

  const onClickReturnButton = () => {
    // NOTE: machineDispatch: totalInputAmount 업데이트
    // NOTE: walletDispatch: coin개수 업데이트
    // NOTE: logDispatch: 로그 업데이트
    const totalInputAmount = machineState.totalInputAmount;
    if (totalInputAmount === 0) {
      return;
    }

    const coinCountInfo = calReturnToCoins(walletState, totalInputAmount);
    machineDispatch({ type: MACHINE_ACTION.RETURN_MONEY });
    walletDispatch({ type: WALLET_ACTION.RETURN_COINS, payload: { coinCountInfo } });
    logDispatch({ type: LOG_ACTION.RETURN_MONEY, payload: { amount: totalInputAmount } });
    clearTimer();
    // dispatch({
    //   type: ACTION.CLEAR_TIMER,
    //   payload: {
    //     key: 'returnChange',
    //   },
    // });
  };

  return (
    <S.InputControllerLayout className={className} dir="column" jc="space-around" ai="unset">
      <S.InputLayer>
        {isSubmitted ? (
          <S.InputAmount onClick={onClickInputAmount}>
            {machineState.totalInputAmount.toLocaleString()}
          </S.InputAmount>
        ) : (
          <InputForm
            walletDispatch={walletDispatch}
            logDispatch={logDispatch}
            calInputToCoins={calInputToCoins}
            setIsSubmitted={setIsSubmitted}
            wallet={walletState}
          />
        )}
        <span>원</span>
      </S.InputLayer>
      <S.ReturnButton onClick={onClickReturnButton}>반환</S.ReturnButton>
    </S.InputControllerLayout>
  );
};

const InputForm = ({
  walletDispatch,
  logDispatch,
  calInputToCoins,
  setIsSubmitted,
  wallet,
}: InputFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { dispatch: machineDispatch } = useMachine();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (inputRef === null || inputRef.current === null) {
      return;
    }

    const inputValue = Number(inputRef.current.value);

    setIsSubmitted(true);

    // NOTE: machineDispatch: totalInputAmount 업데이트
    // NOTE: walletDispatch: coin개수 업데이트
    // NOTE: logDispatch: log 업데이트

    const { realInputAmount, coinCountInfo } = calInputToCoins(wallet, inputValue);

    machineDispatch({ type: MACHINE_ACTION.INSERT_MONEY, payload: { amount: realInputAmount } });
    walletDispatch({ type: WALLET_ACTION.INSERT_COINS, payload: { coinCountInfo } });
    logDispatch({ type: LOG_ACTION.INSERT_MONEY, payload: { amount: realInputAmount } });

    /*setTimer(() => {
      const returnAmount = machineState.totalInputAmount + realInputAmount;
      if (returnAmount === 0) {
        return;
      }

      machineDispatch({ type: MACHINE_ACTION.RETURN_MONEY });
      logDispatch({
        type: LOG_ACTION.RETURN_MONEY,
        payload: { amount: returnAmount },
      });
    }, RETURN_MONEY_DELAY);*/
  };

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <S.InputFormLayout onSubmit={onSubmit}>
      <S.Input ref={inputRef} min={0} max={50000} />
    </S.InputFormLayout>
  );
};

export default InputController;
