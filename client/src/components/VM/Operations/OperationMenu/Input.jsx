import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { InputContext } from "../../../../store/InputStore";
import { MessageContext } from "../../../../store/MessageStore";

export default function Input() {
  const inputContext = useContext(InputContext);
  const { input } = inputContext;
  const messageContext = useContext(MessageContext);
  const { message, setMessage } = messageContext;

  return (
    <StyledInput>
      <span>{input}</span>원
    </StyledInput>
  );
}

const StyledInput = styled.form`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 400px;
  height: 70px;
  margin: 25px 0;
  padding: 0 20px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
`;
