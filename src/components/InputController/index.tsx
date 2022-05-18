import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { RETURN_CHANGE_DELAY } from '@/constants/timer';
import { ACTION, VMContext } from '@/Provider/VMProvider';
import { Flexbox } from '@/utils/style';

const InputController = ({ className }) => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const {
    state: { totalInputAmount },
    dispatch,
  } = useContext(VMContext);

  const onClickInputAmount = () => {
    setIsSubmitted(false);
  };

  const onClickReturnButton = () => {
    dispatch({
      type: ACTION.RETURN_CHANGE,
    });

    dispatch({
      type: ACTION.CLEAR_TIMER,
      payload: {
        key: 'returnChange',
      },
    });
  };

  return (
    <InputControllerLayout className={className} dir="column" jc="space-around" ai="unset">
      <InputLayer>
        {isSubmitted ? (
          <InputAmount onClick={onClickInputAmount}>
            {totalInputAmount.toLocaleString()}
          </InputAmount>
        ) : (
          <InputForm dispatch={dispatch} setIsSubmitted={setIsSubmitted} />
        )}
        <span>원</span>
      </InputLayer>
      <ReturnButton onClick={onClickReturnButton}>반환</ReturnButton>
    </InputControllerLayout>
  );
};

const InputForm = ({ dispatch, setIsSubmitted }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    setIsSubmitted(true);

    dispatch({
      type: ACTION.INSERT_MONEY_BY_TYPING,
      payload: {
        amount: inputValue,
      },
    });

    dispatch({
      type: ACTION.SET_TIMER,
      payload: {
        key: 'returnChange',
        delay: RETURN_CHANGE_DELAY,
        callback: () => {
          dispatch({ type: ACTION.RETURN_CHANGE });
        },
      },
    });
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};

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
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }
`;

const ReturnButton = styled.button.attrs({ type: 'button' })`
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 5px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkBlack};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.lightBlack};
  }
`;

export default InputController;
