import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MenuImage from "./Menu/MenuImage";
import MenuPrice from "./Menu/MenuPrice";
import { InputContext } from "store/InputStore";
import { MessageContext } from "store/MessageStore";
import { MenuContext } from "store/MenuStore";
import { SELECT_COUNT } from "constants/constants";

export default function Menu({ name, price, imageURL, stock }) {
  const context = useContext(InputContext);
  const { input, setInput } = context;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;
  const menuContext = useContext(MenuContext);
  const { menu, setMenu } = menuContext;

  const [timer, setTimer] = useState(false);

  useEffect(() => {
    if (!timer) return;
    const timerId = setTimeout(() => {
      setMessage((prev) => [...prev, `${name}가 선택되었습니다 \n`]);
      setMenu(getNewMenu(menu, name));
    }, SELECT_COUNT);

    return () => {
      clearTimeout(timerId);
      setTimer(false);
    };
  }, [timer]);

  return (
    <>
      {stock ? (
        <StyledMenu
          onClick={() => {
            if (input < price) return;
            setInput(input - price);
            setTimer(true);
          }}
        >
          <MenuImage imageURL={imageURL} name={name}></MenuImage>
          <MenuPrice price={price} outOfStock={false}></MenuPrice>
        </StyledMenu>
      ) : (
        <StyledOutOfStock>
          <MenuImage imageURL={imageURL} name={name}></MenuImage>
          <MenuPrice price={price} outOfStock={true}></MenuPrice>
        </StyledOutOfStock>
      )}
    </>
  );
}

function getNewMenu(menu, name) {
  const newMenu = [...menu];
  newMenu.forEach((menu) => {
    if (menu.name === name) {
      menu.stock -= 1;
    }
  });
  return newMenu;
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

const StyledOutOfStock = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 150px;
  margin: 10px;
  align-items: center;
  cursor: pointer;
  background-color: red;
  &:hover {
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 10%);
  }
`;
