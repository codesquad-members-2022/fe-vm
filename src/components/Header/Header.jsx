import React from "react";
import { Link } from "react-router-dom";
import { HeaderBlock, VendingMachineButton, WalletButton } from "./Header.styled";

function Header() {
  return (
    <HeaderBlock>
      <VendingMachineButton>
        <Link to="/vendingmachine" style={{ textDecoration: "none" }}>
          자판기
        </Link>
      </VendingMachineButton>
      <WalletButton>
        <Link to="/wallet" style={{ textDecoration: "none" }}>
          지갑
        </Link>
      </WalletButton>
    </HeaderBlock>
  );
}

export { Header };
