import React from "react";
import { StyledMenu } from "./Menu.styled";
import { addComma } from "utils";

function Menu({ title, price }) {
  return (
    <StyledMenu>
      <div>{title}</div>
      <p>{addComma(price)}</p>
    </StyledMenu>
  );
}

export { Menu };
