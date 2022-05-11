import React from "react";
import styled from "styled-components";
import Input from "./OperationMenu/Input";
import MessageContainer from "./OperationMenu/Message";
import Return from "./OperationMenu/Return";

export default function Operations() {
  return (
    <StyledOperations>
      <Input />
      <Return />
      <MessageContainer />
    </StyledOperations>
  );
}

const StyledOperations = styled.div`
  width: 470px;
  height: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;
