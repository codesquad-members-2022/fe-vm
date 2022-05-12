import React from "react";
import styled from "styled-components";
import WalletProvider from "../contexts/walletContext";

function Wallet() {
  return (
    <WalletWrap>
      <WalletProvider></WalletProvider>
    </WalletWrap>
  );
}

const WalletWrap = styled.div`
  width: 300px;
  height: 700px;
  border: 4px solid ${({ theme }) => theme.colors.lightBlue};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  gap: 20px;
`;
export default Wallet;
