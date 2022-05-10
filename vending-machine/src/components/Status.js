import React from "react";
import styled from "styled-components";
function Status() {
  return <StatusWrap>status</StatusWrap>;
}

const StatusWrap = styled.div`
  width: 90%;
  height: 300px;
  background: ${({ theme }) => theme.colors.gray};
  box-sizing: border-box;
  padding: 10px;
  gap = 10px;
`;
export default Status;
