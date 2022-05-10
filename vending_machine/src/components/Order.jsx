import React, { useContext } from 'react';
import styled from 'styled-components';

import { ProgressContext, VmInputValueContext } from '../App';
import History from './History';

function Order() {
  const { setInputValue } = useContext(VmInputValueContext);

  const { progressBox, addMoneyMessage } = useContext(ProgressContext);

  const changeValue = ({ target }) => {
    setInputValue(Number(target.value));
    // 로그 계속 찍힘
    addMoneyMessage(target.value);
  };

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <StyledInput type="text" onChange={changeValue} />
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
