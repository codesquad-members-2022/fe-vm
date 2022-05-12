import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { ProgressContext } from '../App';

const InputForm = ({ totalMoney, setTotalMoney }) => {
  const [inputValue, setInputValue] = useState(0);
  const inputTag = useRef();

  const { addMoneyMessage } = useContext(ProgressContext);

  const changeTotalMoney = (e) => {
    e.preventDefault();
    setInputValue(0);
    setTotalMoney(Number(totalMoney) + Number(inputValue));
    addMoneyMessage(Number(inputValue));
    inputTag.current.value = '';
  };

  const changeValue = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <StyledForm onSubmit={changeTotalMoney}>
      <StyledInput
        type="text"
        placeholder="0"
        ref={inputTag}
        onChange={changeValue}
      />
      <StyledSpan>원</StyledSpan>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  margin: 0 auto;
  width: 270px;
  height: 60px;
  margin-top: 20px;
  border: 2px solid gray;
`;

const StyledInput = styled.input`
  width: 230px;
  height: inherit;
  font-size: 20px;
  border: none;
  text-align: right;
  background-color: inherit;

  :focus {
    outline: none;
  }
`;

const StyledSpan = styled.span`
  font-size: 20px;
`;

export default InputForm;
