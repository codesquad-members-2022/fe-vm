import { useState } from "react";
import styled from "styled-components";

import colors from "../../constants/colors";

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 3.5vh;
  margin-top: 3.5vh;
`;

const HeaderBtn = styled.div`
  display: flex;
  width: 10vw;
  height: 3.5vh;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #d3d3d3;
  background-color: ${(props) => colors[props.display]};
  margin: 0 1vw 0 1vw;
  color: black;
`;

export const HeaderBtns = ({ info }) => {
  const [btnDisplay, setBtnDisplay] = useState("lightWhite");
  const onHeaderBtnClick = () => {
    setBtnDisplay("black");
  };
  return (
    <HeaderBtn onClick={onHeaderBtnClick} display={btnDisplay}>
      {info}
    </HeaderBtn>
  );
};
