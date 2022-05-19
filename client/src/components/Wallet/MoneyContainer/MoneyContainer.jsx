import React, { useContext } from "react";
import styled from "styled-components";
import { WalletContext } from "store/WalletStore";
import Money from "./Money/Money";

export default function MoneyContainer({ keys }) {
  const walletContext = useContext(WalletContext);
  const { wallet } = walletContext;

  const moneyList = keys.map((key, index) => (
    <Money key={index} unit={key} amount={wallet[key]} />
  ));

  return <StyledMoneyContainer>{moneyList}</StyledMoneyContainer>;
}

const StyledMoneyContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 600px;
  border: 1px solid black;
  margin: 0 auto;
`;
