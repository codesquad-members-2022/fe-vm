import React, { useContext } from "react";
import styled from "styled-components";
import MenuImage from "./Menu/MenuImage";
import MenuPrice from "./Menu/MenuPrice";
import { InputContext } from "store/InputStore";
import { MessageContext } from "store/MessageStore";

export default function Menu({ name, price, imageURL }) {
  const context = useContext(InputContext);
  const { input, setInput } = context;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;

  return (
    <StyledMenu
      onClick={() => {
        if (input - price < 0) return;
        setInput(input - price);
        setMessage((prev) => [...prev, `${name}가 선택되었습니다 \n`]);
      }}
    >
      <MenuImage imageURL={imageURL} name={name}></MenuImage>
      <MenuPrice price={price}></MenuPrice>
    </StyledMenu>
  );
}

const StyledMenu = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 150px;
  margin: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  }
`;
