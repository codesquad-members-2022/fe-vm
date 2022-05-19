import React, { useContext } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import { MenuContext } from "store/MenuStore";

export default function Menus() {
  const menuContext = useContext(MenuContext);
  const { menu } = menuContext;

  const menuList = menu.map((menu, index) => (
    <Menu
      key={index}
      name={menu.name}
      price={menu.price}
      imageURL={menu.imageURL}
      stock={menu.stock}
    />
  ));
  return <StyledMenus>{menuList}</StyledMenus>;
}

const StyledMenus = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 720px;
  height: 740px;
  border-right: 5px solid black;
  padding: 30px;
`;
