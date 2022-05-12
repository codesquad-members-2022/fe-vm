import React from "react";
import styled from "styled-components";

export default function Total({ total }) {
  return <StyledTotal>{total}원</StyledTotal>;
}

const StyledTotal = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 250px;
  height: 80px;
  border: 1px solid black;
  margin: 10px auto;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
`;
