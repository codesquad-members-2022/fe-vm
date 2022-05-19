import React from "react";
import styled from "styled-components";
import { HeightSort } from "../style/Globalstyles";
function Inlet() {
  return (
    <InletWrap>
      <InletInput></InletInput>
    </InletWrap>
  );
}
const InletWrap = styled.div`
  width: 100%;
  height: 70px;
  ${HeightSort};
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 5%;
`;
const InletInput = styled.input`
  width: 30%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkGray};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;
export default Inlet;
