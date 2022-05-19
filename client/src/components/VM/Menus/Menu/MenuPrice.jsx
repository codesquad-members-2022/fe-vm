import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { InputContext } from "store/InputStore";

export default function MenuPrice({ price, outOfStock }) {
  const context = useContext(InputContext);
  const { input } = context;
  const ref = useRef(null);

  useEffect(() => {
    if (outOfStock) return;
    if (input >= price) {
      ref.current.style.color = "black";
    } else {
      ref.current.style.color = "lightgray";
    }
  }, [input]);

  return <StyledMenuPrice ref={ref}>{price}</StyledMenuPrice>;
}

const StyledMenuPrice = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: lightgray;
`;
