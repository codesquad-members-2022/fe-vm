import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { RETURN_CHANGE_DELAY } from '@/constants/timer';
import { ACTION, VMContext } from '@/Context/VMContext';
import { LOG_ACTION, useLog } from '@/Context/VMContext/LogContext';
import { MACHINE_ACTION, useMachine } from '@/Context/VMContext/MachineContext';
import { useWallet, WALLET_ACTION } from '@/Context/VMContext/WalletContext';
import { Flexbox } from '@/styles/util';

export interface Props {
  className: string;
}

// NOTE: Wallet -> 동전수, 총금액 업데이트
// NOTE: Machine -> 금액 투입, 금액 반환
// NOTE: Log -> 로그 업데이트
const InputController = ({ className }: Props) => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const {
    state: { totalInputAmount },
    dispatch,
  } = useContext(VMContext);
  const {
    wallet: { state: wState, dispatch: wDispatch },
    calInputToCoins,
    calReturnToCoins,
  } = useWallet();
  const { state: mState, dispatch: mDispatch } = useMachine();
  const { state: lState, dispatch: lDispatch } = useLog();

  const onClickInputAmount = () => {
    setIsSubmitted(false);
  };

  const onClickReturnButton = () => {
    // dispatch({
    //   type: ACTION.RETURN_CHANGE,
    // });
    // NOTE: mDispatch: totalInputAmount 업데이트
    // NOTE: wDispatch: coin개수 업데이트
    // NOTE: lDispatch: 로그 업데이트
    const totalInputAmount = mState.totalInputAmount;
    const coinCountInfo = calReturnToCoins(wState, totalInputAmount);
    mDispatch({ type: MACHINE_ACTION.RETURN_MONEY });
    wDispatch({
      type: WALLET_ACTION.RETURN_COINS,
      payload: {
        coinCountInfo,
      },
    });
    lDispatch({
      type: LOG_ACTION.RETURN_MONEY,
      payload: {
        amount: totalInputAmount,
      },
    });

    // dispatch({
    //   type: ACTION.CLEAR_TIMER,
    //   payload: {
    //     key: 'returnChange',
    //   },
    // });
  };

  return (
    <InputControllerLayout className={className} dir="column" jc="space-around" ai="unset">
      <InputLayer>
        {isSubmitted ? (
          <InputAmount onClick={onClickInputAmount}>
            {mState.totalInputAmount.toLocaleString()}
          </InputAmount>
        ) : (
          <InputForm
            wDispatch={wDispatch}
            mDispatch={mDispatch}
            lDispatch={lDispatch}
            calInputToCoins={calInputToCoins}
            setIsSubmitted={setIsSubmitted}
            wallet={wState}
          />
        )}
        <span>원</span>
      </InputLayer>
      <ReturnButton onClick={onClickReturnButton}>반환</ReturnButton>
    </InputControllerLayout>
  );
};

const InputForm = ({
  wDispatch,
  mDispatch,
  lDispatch,
  calInputToCoins,
  setIsSubmitted,
  wallet,
}) => {
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    const inputValue = Number(inputRef.current.value);

    setIsSubmitted(true);

    // NOTE: mDispatch: totalInputAmount 업데이트
    // NOTE: wDispatch: coin개수 업데이트
    // NOTE: lDispatch: log 업데이트

    const { realInputAmount, coinCountInfo } = calInputToCoins(wallet, inputValue);
    console.log(realInputAmount);

    mDispatch({ type: MACHINE_ACTION.INSERT_MONEY, payload: { amount: realInputAmount } });
    wDispatch({ type: WALLET_ACTION.INSERT_COINS, payload: { coinCountInfo } });
    lDispatch({ type: LOG_ACTION.INSERT_MONEY, payload: { amount: realInputAmount } });

    // dispatch({
    //   type: ACTION.INSERT_MONEY_BY_TYPING,
    //   payload: {
    //     amount: inputValue,
    //   },
    // });
    //
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

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <InputFormLayout onSubmit={onSubmit}>
      <Input ref={inputRef} min={0} max={50000} />
    </InputFormLayout>
  );
};

const InputControllerLayout = styled.div`
  ${Flexbox};
  width: 99%;
`;

const InputLayer = styled.div`
  ${Flexbox};
  font-size: ${({ theme }) => theme.fontSize.xl};
  height: 30px;
`;

const InputFormLayout = styled.form`
  width: 100%;
`;

const Input = styled.input.attrs({ type: 'number', placeholder: '0' })`
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 100%;
  height: 100%;
  text-align: right;
  padding: 0 5px;
  border-bottom: 1px solid ${({ theme }) => theme.color.black};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

const InputAmount = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  width: 100%;
  text-align: right;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.color.black};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }
`;

const ReturnButton = styled.button.attrs({ type: 'button' })`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.color.black};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.lightBlack};
  }
`;

export default InputController;
