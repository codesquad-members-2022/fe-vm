import React from "react";
import { Link } from "react-router-dom";
import { StyledNavButton } from "../NavBar";

export default function NavButtonVM({ selectVM }) {
  return (
    <Link to="/">
      <StyledNavButton onClick={selectVM}>자판기</StyledNavButton>
    </Link>
  );
}
