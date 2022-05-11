import React from "react";
import Currency from "./Currency";
import TotalMoney from "./TotalMoney";
import styled from "styled-components";
import { HeightSort } from "../style/Globalstyles";

function Wallet() {
  return (
    <WalletWrap>
      <Currency></Currency>
      <Currency></Currency>
      <Currency></Currency>
      <Currency></Currency>
      <Currency></Currency>
      <Currency></Currency>
      <Currency></Currency>
      <TotalMoney></TotalMoney>
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
