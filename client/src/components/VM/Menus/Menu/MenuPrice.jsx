import React from "react";
import styled from "styled-components";

export default function MenuPrice({ price }) {
  return <StyledMenuPrice>{price}</StyledMenuPrice>;
}

const StyledMenuPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
