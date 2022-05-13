import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SelectedNavBarButton({ clickHandler, link, text }) {
  return (
    <Link to={link}>
      <StlyedSelectedNavBarButton onClick={clickHandler}>
        {text}
      </StlyedSelectedNavBarButton>
    </Link>
  );
}

export const StlyedSelectedNavBarButton = styled.button`
  width: 150px;
  height: 70px;
  border: 1px solid black;
  font-size: 25px;
  font-weight: bold;
  background-color: gray;
  color: white;
`;
