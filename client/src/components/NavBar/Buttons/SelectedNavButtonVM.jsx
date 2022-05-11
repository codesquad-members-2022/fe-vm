import React from "react";
import { Link } from "react-router-dom";
import { StlyedSelectedNavButton } from "../NavBar";

export default function SelectedNavButtonVM({ selectVM }) {
  return (
    <Link to="/">
      <StlyedSelectedNavButton onClick={selectVM}>
        자판기
      </StlyedSelectedNavButton>
    </Link>
  );
}
