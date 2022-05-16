import React, { useContext } from "react";
import styled from "styled-components";
import { WalletContext } from "store/WalletStore";

export default function Total() {
  const walletContext = useContext(WalletContext);
  const { total } = walletContext;
  return <StyledTotal>{total}원</StyledTotal>;
}

const StyledTotal = styled.section`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 250px;
  height: 80px;
  border: 1px solid black;
  margin: 10px auto;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
`;
