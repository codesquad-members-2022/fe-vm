import React from 'react';
import styled from 'styled-components';

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
`;

const Input = styled.input.attrs({ type: 'text', placeholder: '0' })`
  font-size: 20px;
  width: 100%;
  text-align: right;
  border-bottom: 1px solid black;
`;

const ReturnButton = styled.button.attrs({ type: 'button' })`
  font-size: 20px;
  padding: 5px;
  border: 1px solid black;
  cursor: pointer;
  transition: background-color 100ms;

  &:hover {
    background-color: #00000022;
  }

  &:active {
    background-color: #00000011;
  }
`;

const InputController = ({ className }) => {
  return (
    <InputControllerLayout className={className}>
      <InputLayer>
        <Input />
        <span>원</span>
      </InputLayer>
      <ReturnButton>반환</ReturnButton>
    </InputControllerLayout>
  );
};

export default InputController;
