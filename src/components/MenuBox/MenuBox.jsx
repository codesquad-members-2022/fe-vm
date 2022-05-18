import React, { useContext } from "react";
import { StyledMenuBox } from "./MenuBox.styled";
import { Menu } from "components";
import { MenuStockContext } from "../../App.js";

function MenuBox() {
  const { menuStock } = useContext(MenuStockContext);

  return (
    <StyledMenuBox>
      {menuStock.map(({ id, title, price, stock }) => (
        <Menu key={id} title={title} price={price} stock={stock}></Menu>
      ))}
    </StyledMenuBox>
  );
}

export { MenuBox };
