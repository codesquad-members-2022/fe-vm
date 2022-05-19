import React, { useContext } from "react";
import styled from "styled-components";
import { MessageContext } from "store/MessageStore";

export default function MessageContainer() {
  const messageContext = useContext(MessageContext);
  const { message } = messageContext;

  const messageList = message.map((log, index) => (
    <Message key={index} log={log}></Message>
  ));

  return <StyledMessageContainer>{messageList}</StyledMessageContainer>;
}

export function Message({ log }) {
  return <StyledMessage>{log}</StyledMessage>;
}

const StyledMessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  margin: 25px 0;
  padding: 15px;
  border: 1px solid black;
  overflow-y: scroll;
`;

const StyledMessage = styled.li`
  font-size: 20px;
  font-weight: bold;
`;
