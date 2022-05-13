import React from "react";
import styled from "styled-components";
import MoneyAmount from "./MoneyAmount";
import MoneyUnit from "./MoneyUnit";

export default function Money({ unit, amount }) {
  return (
    <StyledMoney>
      <MoneyUnit unit={unit}></MoneyUnit>
      <MoneyAmount amount={amount} unit={unit}></MoneyAmount>
    </StyledMoney>
  );
}

const StyledMoney = styled.li`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 80px;
  border: 1px solid black;
  margin: 5px auto 0 auto;
`;
