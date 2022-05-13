import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { ProgressContext } from '../App';
import { color, fontSize } from '../style/variables';
import { changeKoreanLocalMoney } from '../utility/util';

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

  const changeValue = () => {
    const onlyNumber = inputTag.current.value.replace(/[^0-9]/g, '');
    setInputValue(onlyNumber);
    inputTag.current.value = changeKoreanLocalMoney(onlyNumber);
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
  border: 2px solid ${color.grey};
`;

const StyledInput = styled.input`
  width: 230px;
  height: inherit;
  font-size: ${fontSize.xl};
  border: none;
  text-align: right;
  background-color: inherit;

  :focus {
    outline: none;
  }
`;

const StyledSpan = styled.span`
  font-size: ${fontSize.xl};
`;

export default InputForm;
