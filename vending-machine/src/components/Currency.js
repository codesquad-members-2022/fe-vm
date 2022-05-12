import React, { useContext, useDebugValue } from "react";
import styled from "styled-components";
import { CenterSort, HeightSort } from "../style/Globalstyles";
import { WalletContext } from "../contexts/walletContext";
function Currency({ money, amount }) {
  const { value, _ } = useContext(WalletContext);
  function decreaseAmount() {
    if (amount === 0) return;
    const newMoney = value.walletMoney.map((currency) => {
      if (money === currency.money) {
        return { ...currency, amount: amount - 1 };
      }
      return currency;
    });
    value.setWalletMoney(newMoney);
  }
  return (
    <CurrencyWrap>
      <Money onClick={decreaseAmount}>{money.toLocaleString()}원</Money>
      <Amount>{amount}개</Amount>
    </CurrencyWrap>
  );
}
const CurrencyWrap = styled.div`
  width: 90%;
  height: 50px;
  ${HeightSort}
  justify-content: space-around;
`;
const Money = styled.div`
  width: 45%;
  height: 100%;
  background: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  ${CenterSort}
`;
const Amount = styled(Money)``;
export default Currency;
