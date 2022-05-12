import { useContext } from "react";
import styled from "styled-components";
import { LogContext } from "../../contexts/Log";

export default function LogMessages() {
  const { logMessages } = useContext(LogContext);
  return (
    <LogMessagesWrapper>
      {logMessages.map((logMessage, index) => (
        <LogMessage key={index}>{logMessage}</LogMessage>
      ))}
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
  overflow: auto;
`;
const LogMessage = styled.div``;
