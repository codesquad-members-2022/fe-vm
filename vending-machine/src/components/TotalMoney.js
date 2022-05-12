import React from "react";
import styled from "styled-components";
function TotalMoney({ sum }) {
  return <TotalMoneyWrap>{sum.toLocaleString()}원</TotalMoneyWrap>;
}
const TotalMoneyWrap = styled.div`
  width: 90%;
  height: 80px;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  background: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
`;
export default TotalMoney;
