import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBarButton({ clickHandler, link, text }) {
  return (
    <Link to={link}>
      <StyledNavBarButton onClick={clickHandler}>{text}</StyledNavBarButton>
    </Link>
  );
}

export const StyledNavBarButton = styled.button`
  width: 150px;
  height: 70px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
`;
