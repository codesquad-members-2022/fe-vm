import React from "react";
import { Link } from "react-router-dom";
import { HeaderBlock, VendingMachineButton, WalletButton } from "./Header.styled";

function Header() {
  return (
    <HeaderBlock>
      <Link to="/vendingmachine" style={{ textDecoration: "none" }}>
        <VendingMachineButton>
          <p>자판기</p>
        </VendingMachineButton>
      </Link>
      <Link to="/wallet" style={{ textDecoration: "none" }}>
        <WalletButton>
          <p>지갑</p>
        </WalletButton>
      </Link>
    </HeaderBlock>
  );
}

export { Header };
