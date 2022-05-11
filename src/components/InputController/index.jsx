import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { VMContext } from '@/Provider/VMProvider';

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

const InputController = ({ className }) => {
  const [submitted, setSubmitted] = useState(true);
  const { state, dispatch } = useContext(VMContext);

  const onClickInputAmount = () => {
    setSubmitted(false);
  };

  return (
    <InputControllerLayout className={className}>
      <InputLayer>
        {submitted ? (
          <InputAmount onClick={onClickInputAmount}>{state.inputAmount}</InputAmount>
        ) : (
          <InputForm dispatch={dispatch} setSubmitted={setSubmitted} />
        )}
        <span>원</span>
      </InputLayer>
      <ReturnButton>반환</ReturnButton>
    </InputControllerLayout>
  );
};

const InputForm = ({ dispatch, setSubmitted }) => {
  const inputRef = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // TODO: 투입금액 업데이트
    // TODO: 로그 업데이트
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <InputFormLayout onSubmit={onSubmit}>
      <Input ref={inputRef} />
    </InputFormLayout>
  );
};

export default InputController;
