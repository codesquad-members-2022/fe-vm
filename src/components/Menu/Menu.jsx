import React from "react";
import { StyledMenu } from "./Menu.styled";

function Menu({ title, price }) {
  return (
    <StyledMenu>
      <div>{title}</div>
      <p>{Number(price).toLocaleString("en")}</p>
    </StyledMenu>
  );
}

export { Menu };
