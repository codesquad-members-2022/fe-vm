import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import menuDB from "menuDB.json";

export default function Menus() {
  const menuList = menuDB.menus.map((menu, index) => (
    <Menu
      key={index}
      name={menu.name}
      price={menu.price}
      imageURL={menu.imageURL}
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
