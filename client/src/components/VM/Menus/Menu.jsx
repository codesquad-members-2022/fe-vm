import React, { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MenuImage from "./Menu/MenuImage";
import MenuPrice from "./Menu/MenuPrice";
import { InputContext } from "store/InputStore";
import { MessageContext } from "store/MessageStore";
import { MenuContext } from "store/MenuStore";
import { SELECT_COUNT } from "constants/constants";
import { throttle } from "utils/util";

export default function Menu({ name, price, imageURL, stock }) {
  const context = useContext(InputContext);
  const { input, setInput } = context;
  const messageContext = useContext(MessageContext);
  const { setMessage } = messageContext;
  const menuContext = useContext(MenuContext);
  const { menu, setMenu } = menuContext;

  const [timer, setTimer] = useState(false);
  const [selected, setSelected] = useState(false);

  const selectFn = useCallback(
    throttle(() => {
      setMessage((prev) => [...prev, `${name}가 선택되었습니다 \n`]);
      setMenu(getNewMenu(menu, name));
      setSelected(false);
    }, SELECT_COUNT),
    [selected]
  );

  useEffect(() => {
    if (!timer) return;
    selectFn(); //실행까지는 되지만 안의 내용이 실행안됨 결국 쓰로틀 함수 문제?
    setTimer(false);
  }, [timer]);

  return (
    <>
      {stock ? (
        !selected ? (
          <StyledMenu
            onClick={() => {
              if (input < price) return;
              setInput(input - price);
              setTimer(true);
              setSelected(true);
            }}
          >
            <MenuImage imageURL={imageURL} name={name}></MenuImage>
            <MenuPrice price={price} outOfStock={false}></MenuPrice>
          </StyledMenu>
        ) : (
          <StyledSelectedMenu>
            <MenuImage imageURL={imageURL} name={name}></MenuImage>
            <MenuPrice price={price} outOfStock={false}></MenuPrice>
          </StyledSelectedMenu>
        )
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
`;

const StyledSelectedMenu = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 150px;
  margin: 10px;
  align-items: center;
  cursor: pointer;
  background-color: gray;
`;
