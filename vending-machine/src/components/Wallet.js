import React, { useContext } from "react";
import styled from "styled-components";
import WalletProvider, { WalletContext } from "../contexts/walletContext";
import { HeightSort } from "../style/Globalstyles";
import Currency from "./Currency";
import TotalMoney from "./TotalMoney";
function Wallet() {
  const walletMoney = useContext(WalletContext);
  const money = walletMoney.value.walletMoney;
  const sum = walletMoney.sum;
  return (
    <WalletWrap>
      {money.map((currency, idx) => (
        <Currency
          key={idx}
          money={currency.title}
          amount={currency.amount}
        ></Currency>
      ))}
      <TotalMoney sum={sum}></TotalMoney>
    </WalletWrap>
  );
}

const WalletWrap = styled.div`
  width: 300px;
  height: 700px;
  border: 4px solid ${({ theme }) => theme.colors.lightBlue};
  margin: 0 auto;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
  ${HeightSort}
`;
export default Wallet;
