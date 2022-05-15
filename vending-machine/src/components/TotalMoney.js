import React from "react";
import styled from "styled-components";
import { HeightSort } from "../style/Globalstyles";

function TotalMoney({ sum }) {
  return <TotalMoneyWrap>{sum.toLocaleString()}원</TotalMoneyWrap>;
}
const TotalMoneyWrap = styled.div`
  width: 90%;
  height: 80px;
  margin-top: 50px;
  justify-content: flex-end;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px;
  background: ${({ theme }) => theme.colors.darkBlue};
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.white};
  ${HeightSort}
`;
export default TotalMoney;
