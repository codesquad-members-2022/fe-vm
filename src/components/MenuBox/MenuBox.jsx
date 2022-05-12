import React from "react";
import { menuItem } from "data";
import { StyledMenuBox } from "./MenuBox.styled";
import { Menu } from "components";

function MenuBox({ inputMoney }) {
  return (
    <StyledMenuBox>
      {menuItem.map(({ id, title, price }) => (
        <Menu key={id} title={title} price={price} inputMoney={inputMoney}></Menu>
      ))}
    </StyledMenuBox>
  );
}

export { MenuBox };
