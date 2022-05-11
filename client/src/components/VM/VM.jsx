import React from "react";
import styled from "styled-components";
import Menus from "./Menus/Menus";
import Operations from "./Operations/Operations";

export default function VM() {
  return (
    <StyledVM>
      <Menus />
      <Operations />
    </StyledVM>
  );
}

const StyledVM = styled.article`
  display: flex;
  width: 1200px;
  height: 750px;
  border: 5px solid black;
  margin: auto;
`;
