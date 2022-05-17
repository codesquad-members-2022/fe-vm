import React, { useContext } from "react";
import styled from "styled-components";
import { CenterSort, HeightSort } from "../style/Globalstyles";
import { WalletContext } from "../contexts/walletContext";
import { decreaseAmount } from "../util/util";
function Currency({ money, amount }) {
  const { walletMoney, setWalletMoney, inputMoneySum, setInputMoneySum } =
    useContext(WalletContext).value;
  function calculateInput(money, amount) {
    if (amount > 0) {
      setInputMoneySum(inputMoneySum + money);
    }
  }
  return (
    <CurrencyWrap>
      <Money
        onClick={() => {
          decreaseAmount(walletMoney, amount, setWalletMoney, money);
          calculateInput(money, amount);
        }}
      >
        {money.toLocaleString()}원
      </Money>
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
