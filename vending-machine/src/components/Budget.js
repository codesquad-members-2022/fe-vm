import React from "react";
import styled from "styled-components";
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
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BudgetInput = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  font-size: 30px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.darkGray};
  border-radius: 5px;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
`;
export default Budget;
