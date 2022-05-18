import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { LogContext } from "../../contexts/Log";

export default function LogMessages() {
  const { logMessages } = useContext(LogContext);
  const messagesEndRef = useRef();
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  });
  return (
    <LogMessagesWrapper>
      {logMessages.map((logMessage, index) => (
        <LogMessage key={index}>{logMessage}</LogMessage>
      ))}
      <div ref={messagesEndRef} />
    </LogMessagesWrapper>
  );
}

const LogMessagesWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.baeMint};
  border-radius: 4px;
  width: 200px;
  height: 200px;
  overflow: scroll;
  font-size: 12px;
  ::-webkit-scrollbar {
    display: none;
  }
`;
const LogMessage = styled.div``;
