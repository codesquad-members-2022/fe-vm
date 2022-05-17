import styled from "styled-components";

import colors from "../../constants/colors";
import Text from "../../Text";
import { FONT } from "../../constants/fonts";
import HeaderInfoContextStore from "../../stores/headerInfoStore";
import { useContext, useEffect, useState } from "react";

const Button = ({ type }) => {
  const headerInfo = useContext(HeaderInfoContextStore);
  const [btnDisplay, setBtnDisplay] = useState(true);

  const onBtnClick = () => {
    headerInfo.setIsHeaderBtnClick(type);
  };

  useEffect(() => {
    if (type === headerInfo.IsHeaderBtnClick) {
      setBtnDisplay(true);
    } else {
      setBtnDisplay(false);
    }
  }, [headerInfo.IsHeaderBtnClick]);

  return (
    <HeaderBtn onClick={onBtnClick} displays={btnDisplay}>
      <Text font={FONT.MEDIUM_BOLD}>{type}</Text>
    </HeaderBtn>
  );
};

const HeaderBtn = styled.div`
  display: flex;
  width: 10vw;
  height: 3.5vh;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(props) => (props.displays ? colors.black : colors.lightWhite)};
  margin: 0 1vw 0 1vw;
  color: ${(props) => (props.displays ? colors.lightWhite : colors.black)};
`;

export default Button;
