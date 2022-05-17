import React, { useContext } from "react";
import styled from "styled-components";
import { WalletContext } from "../contexts/walletContext";
import { CenterSort, HeightSort } from "../style/Globalstyles";
function Budget() {
  const inputMoneySum = useContext(WalletContext).value.inputMoneySum;

  return (
    <BudgetWrap>
      <BudgetInput>{inputMoneySum.toLocaleString("ko-kr")}원</BudgetInput>
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
