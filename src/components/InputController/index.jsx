import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ACTION, VMContext } from '@/Provider/VMProvider';

const InputController = ({ className }) => {
  const [isSubmitted, setIsSubmitted] = useState(true);
  const {
    state: { totalInputAmount },
    dispatch,
  } = useContext(VMContext);

  const onClickInputAmount = () => {
    setIsSubmitted(false);
  };

  return (
    <InputControllerLayout className={className}>
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
      <ReturnButton>반환</ReturnButton>
    </InputControllerLayout>
  );
};

const InputForm = ({ dispatch, setIsSubmitted }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);

    setIsSubmitted(true);

    /* 금액 투입, 로그 추가 */
    dispatch({
      type: ACTION.INSERT_MONEY_BY_TYPING,
      payload: {
        amount: inputValue,
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
  display: flex;
  flex-direction: column;
  width: 99%;
  justify-content: space-around;
`;

const InputLayer = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  height: 30px;
`;

const InputFormLayout = styled.form`
  width: 100%;
`;

const Input = styled.input.attrs({ type: 'number', placeholder: '0' })`
  font-size: 20px;
  width: 100%;
  height: 100%;
  text-align: right;
  padding: 0 5px;
  border-bottom: 1px solid black;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

const InputAmount = styled.div`
  font-size: 20px;
  width: 100%;
  text-align: right;
  padding: 4px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #00000022;
  }

  &:active {
    background-color: #00000011;
  }
`;

const ReturnButton = styled.button.attrs({ type: 'button' })`
  font-size: 20px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: #00000022;
  }

  &:active {
    background-color: #00000011;
  }
`;

export default InputController;
