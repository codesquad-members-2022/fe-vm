import React from 'react';
import styled from 'styled-components';
import { Default_radius, Color } from 'Assets/Style/Common';

const StatusInputForm = () => {
  return (
    <StatusInputBox>
      <StatusInput type="number" min={10} max={10000} />
      <StatusBtn>입력</StatusBtn>
    </StatusInputBox>
  );
};

const StatusInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 48rem;
  height: 5.6rem;
`;

const StatusInput = styled.input`
  margin-top: 3rem;
  width: 32rem;
  color: ${Color.white};
  font-size: 1.8rem;
  height: 1.6rem;
  padding: 2rem 1.6rem;
  gap: 1rem;
  background-color: ${Color.black};
  ${Default_radius}
  border: 1px solid ${Color.lightGray};
  &:focus {
    outline: none;
  }
`;

const StatusBtn = styled.button`
  padding: 1.4rem 3.2rem;
  font-size: 1.8rem;
  margin-top: 3rem;
  margin-left: 0.8rem;
  font-weight: bold;
  font-family: 'Noto Sans KR';
  width: 12rem;
  height: 5.6rem;
  border: none;
  border-radius: 1rem;
  background-color: ${Color.yellowGreen};
`;

export default StatusInputForm;
