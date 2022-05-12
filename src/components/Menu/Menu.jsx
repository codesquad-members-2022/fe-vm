import React from "react";
import { StyledMenu, StyledMenuTitle, StyledMenuPrice } from "./Menu.styled";
import { addComma } from "utils";

function Menu({ title, price, inputMoney }) {
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
