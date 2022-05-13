import React from "react";
import { MenuBox, Information } from "components";
import { StyledVendingMachine } from "./VendingMachine.styled";

function VendingMachine() {
  return (
    <StyledVendingMachine>
      <MenuBox></MenuBox>
      <Information></Information>
    </StyledVendingMachine>
  );
}

export { VendingMachine };
