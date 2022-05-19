import { fireEvent } from "@testing-library/react";
import React, { useState } from "react";
import styled from "styled-components";
import { HeightSort } from "../style/Globalstyles";
function Inlet() {
  const [input, setInput] = useState("");
  function checkInput(text) {
    console.log(typeof text);
    if (isNaN(text)) {
      alert("유효한 입력값이 아닙니다 다시 입력해 주세요");
      return false;
    } else {
      return true;
    }
  function submitValue(e) {
    if (e.key === "Enter") {
      if (!checkInput(e.target.value)) {
        e.target.value = null;
      }
    }
  }
  return (
    <InletWrap>
      <InletInputWrap>
        <InletInput onKeyPress={submitValue}></InletInput>
      </InletInputWrap>
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
  gap: 10px;
`;
const InletInputWrap = styled.div`
  width: 30%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
`;
const InletInput = styled.input`
  width: 100%;
  height: 100%;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.white};
`;
export default Inlet;
