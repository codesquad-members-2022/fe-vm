import React, { useContext } from "react";
import { MenuBox, Information } from "components";
import { StyledVendingMachine } from "./VendingMachine.styled";
import { MoneyContext } from "../../App.js";

function VendingMachine() {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);

  return (
    <StyledVendingMachine>
      <MenuBox inputMoney={inputMoney}></MenuBox>
      <Information></Information>
    </StyledVendingMachine>
  );
}

export { VendingMachine };
