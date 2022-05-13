import React, { useContext } from "react";
import { StyledMenu, StyledMenuTitle, StyledMenuPrice } from "./Menu.styled";
import { addComma } from "utils";
import { MoneyContext } from "../../App.js";

function Menu({ title, price }) {
  const { inputMoney } = useContext(MoneyContext);

  return (
    <StyledMenu>
      <StyledMenuTitle price={price} inputMoney={inputMoney}>
        {title}
      </StyledMenuTitle>
      <StyledMenuPrice>{addComma(price)}</StyledMenuPrice>
    </StyledMenu>
  );
}

export { Menu };
