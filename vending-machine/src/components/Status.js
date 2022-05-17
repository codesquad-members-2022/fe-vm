import React, { useContext } from "react";
import styled from "styled-components";
import { messageContext } from "../contexts/messageContext";
function Status() {
  const message = useContext(messageContext).message;
  return <StatusWrap>{message}</StatusWrap>;
}

const StatusWrap = styled.div`
  width: 90%;
  height: 300px;
  background: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
`;
export default Status;
