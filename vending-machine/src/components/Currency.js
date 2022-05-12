import React from "react";
import styled from "styled-components";
function Currency({ money, amount }) {
  return (
    <CurrencyWrap>
      <Money>{money.toLocaleString()}원</Money>
      <Amount>{amount}개</Amount>
    </CurrencyWrap>
  );
}
const CurrencyWrap = styled.div`
  width: 90%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Money = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;
const Amount = styled(Money)``;
export default Currency;
