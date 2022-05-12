import React from "react";
import { HeaderBlock, VendingMachineButton, WalletButton } from "./Header.styled";

function Header() {
  return (
    <HeaderBlock>
      <VendingMachineButton>
        <p>자판기</p>
      </VendingMachineButton>
      <WalletButton>
        <p>지갑</p>
      </WalletButton>
    </HeaderBlock>
  );
}

export { Header };
