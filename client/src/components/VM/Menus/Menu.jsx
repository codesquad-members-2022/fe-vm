import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import MenuImage from "./Menu/MenuImage";
import MenuPrice from "./Menu/MenuPrice";
import menuDB from "../../../menuDB.json";
import { InputContext } from "../../../store/InputStore";

//TODO : menuDB 추가하여 Menu를 map을 통한 li로 생성
export default function Menu() {
  const context = useContext(InputContext);
  const { input, setInput } = context;
  const ref = useRef(null);

  useEffect(() => {
    if (input >= menuDB[0].price) {
      ref.current.style.border = "2px solid red";
    }
  }, [input]);

  return (
    <StyledMenu
      ref={ref}
      onClick={() => {
        setInput(input - menuDB[0].price);
      }}
    >
      <MenuImage
        imageURL={menuDB[0].imageURL}
        name={menuDB[0].name}
      ></MenuImage>
      <MenuPrice price={menuDB[0].price}></MenuPrice>
    </StyledMenu>
  );
}

const StyledMenu = styled.li`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 150px;
  border: 1px solid black;
  margin: 10px;
  align-items: center;
  cursor: pointer;
`;
