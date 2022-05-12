import React from "react";
import { Link } from "react-router-dom";
import { StlyedSelectedNavButton } from "../NavBar";

export default function SelectedNavButtonWallet({ selectWallet }) {
  return (
    <Link to="/wallet">
      <StlyedSelectedNavButton onClick={selectWallet}>
        지갑
      </StlyedSelectedNavButton>
    </Link>
  );
}
