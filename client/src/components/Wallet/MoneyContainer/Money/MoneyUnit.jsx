import React from "react";
import styled from "styled-components";

export default function MoneyUnit({ unit }) {
  return <StyledMoneyUnit>{unit}원</StyledMoneyUnit>;
}

const StyledMoneyUnit = styled.div`
  display: flex;
  width: 110px;
  height: 80px;
  border: 1px solid black;
  padding: 5px;
  border-radious: 10px;
`;
