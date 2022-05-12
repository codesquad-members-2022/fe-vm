import React, { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { ProgressContext, TotalMoneyContext } from '../App';
import History from './History';

function Order() {
  const [inputValue, setInputValue] = useState(0);
  const inputTag = useRef();

  const { progressBox, addMoneyMessage } = useContext(ProgressContext);
  const { totalMoney, setTotalMoney } = useContext(TotalMoneyContext);

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
    <>
      <StyledTotal>{totalMoney}원</StyledTotal>
      <StyledForm onSubmit={changeTotalMoney}>
        <StyledInput type="text" onChange={changeValue} ref={inputTag} />
        <StyledSpan>원</StyledSpan>
      </StyledForm>

      <StyledBtn>반환</StyledBtn>
      <StyledMessage>
        <span>message</span>
        <ul>
          <History progressBox={progressBox} />
        </ul>
      </StyledMessage>
    </>
  );
}

const StyledTotal = styled.p`
  margin: 0 auto;
  width: 270px;
  height: 40px;
  margin-top: 30px;
  border: 2px solid gray;
  font-size: 20px;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  width: 270px;
  height: 60px;
  margin-top: 30px;
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

const StyledBtn = styled.button`
  margin-top: 30px;
  font-size: 20px;
  width: 270px;
  height: 60px;
  border: 2px solid gray;
`;

const StyledMessage = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 270px;
  height: 400px;
  border: 2px solid gray;
`;

export default Order;
