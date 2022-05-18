import React, { useContext, useRef } from 'react';
import styled from 'styled-components';

import { ProgressContext } from '../App';
import { color, fontSize } from '../style/variables';
import {
  changeKoreanLocalMoney,
  changeStrMoneyToNumMoney,
} from '../utility/util';

const InputForm = ({ totalMoney, setTotalMoney }) => {
  const inputTag = useRef();

  const { addMoneyMessage } = useContext(ProgressContext);

  const changeValue = () => {
    const onlyNumber = +inputTag.current.value.replace(/[^0-9]/g, '');
    inputTag.current.value = changeKoreanLocalMoney(onlyNumber);
  };

  const changeTotalMoney = (e) => {
    if (e.key !== 'Enter') return;
    const inputValue = +changeStrMoneyToNumMoney(inputTag.current.value);
    setTotalMoney(+totalMoney + inputValue);
    addMoneyMessage(inputValue);
    inputTag.current.value = '';
  };

  return (
    <>
      <FormContainer>
        <StyledInput
          type="text"
          placeholder="0"
          ref={inputTag}
          onKeyPress={changeTotalMoney}
          onChange={changeValue}
        />
        <StyledSpan>원</StyledSpan>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  margin: 0 auto;
  width: 270px;
  height: 60px;
  margin-top: 20px;
  border: 2px solid ${color.gray};
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
