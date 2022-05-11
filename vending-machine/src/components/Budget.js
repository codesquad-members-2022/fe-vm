import React from "react";
import styled from "styled-components";
import { CenterSort, HeightSort } from "../style/Globalstyles";
function Budget() {
  return (
    <BudgetWrap>
      <BudgetInput>10000원</BudgetInput>
    </BudgetWrap>
  );
}
const BudgetWrap = styled.div`
  width: 100%;
  height: 150px;
  ${CenterSort}
`;
const BudgetInput = styled.div`
  width: 90%;
  height: 60px;
  justify-content: flex-end;
  font-size: 30px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
  ${HeightSort}
`;
export default Budget;
