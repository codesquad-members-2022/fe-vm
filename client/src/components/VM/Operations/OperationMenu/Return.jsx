import React from "react";
import styled from "styled-components";

export default function Return() {
  return <StyledReturn>반환</StyledReturn>;
}

const StyledReturn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 60px;
  margin: 25px 0;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
`;
