import React from "react";
import { Link } from "react-router-dom";
import { StyledNavButton } from "../NavBar";

export default function NavButtonWallet({ selectWallet }) {
  return (
    <Link to="/wallet">
      <StyledNavButton onClick={selectWallet}>지갑</StyledNavButton>
    </Link>
  );
}
