import React, { useContext } from "react";
import styled from "styled-components";
import { messageContext } from "../contexts/messageContext";
function Status() {
  const message = useContext(messageContext).message;
  return (
    <StatusWrap>
      {message.map((el, idx) => (
        <StatusMessage key={idx}>{el}</StatusMessage>
      ))}
    </StatusWrap>
  );
}

const StatusWrap = styled.div`
  width: 90%;
  height: 300px;
  background: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  overflow-y: auto;
`;
const StatusMessage = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 10px;
  font-size: 20px;
`;
export default Status;
