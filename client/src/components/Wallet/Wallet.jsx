import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import MoneyContainer from "./MoneyContainer/MoneyContainer";
import Total from "./Total/Total";
import { calculateTotal } from "utils/util";
import { WalletContext } from "store/WalletStore";

export default function Wallet() {
  const walletContext = useContext(WalletContext);
  const { wallet, setTotal } = walletContext;

  const keys = Object.keys(wallet);

  useEffect(() => {
    setTotal(calculateTotal(keys, wallet));
  }, [wallet]);

  return (
    <StyledWallet>
      <MoneyContainer keys={keys} />
      <Total />
    </StyledWallet>
  );
}

const StyledWallet = styled.article`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 750px;
  border: 5px solid black;
  margin: auto;
  padding: 20px;
`;
