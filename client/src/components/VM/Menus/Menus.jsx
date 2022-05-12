import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

export default function Menus() {
  return (
    <StyledMenus>
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
      <Menu />
    </StyledMenus>
  );
}

const StyledMenus = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 720px;
  height: 740px;
  border-right: 5px solid black;
  padding: 30px;
`;
