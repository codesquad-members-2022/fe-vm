import styled from "styled-components";

import colors from "../../constants/colors";
import Text from "../../Text";
import { FONT } from "../../constants/fonts";
import HeaderInfoContextStore from "../../stores/headerInfoStore";
import { useContext } from "react";

const HeaderBtn = styled.div`
  display: flex;
  width: 10vw;
  height: 3.5vh;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid black;
  background-color: ${(props) => (props.display ? colors.black : colors.lightWhite)};
  margin: 0 1vw 0 1vw;
  color: ${(props) => (props.display ? colors.lightWhite : colors.black)};
`;

const VendingMachineBtn = () => {
  const headerInfo = useContext(HeaderInfoContextStore);
  const onHeaderBtnClick = () => {
    headerInfo.setHeaderBtnDisplay(true);
  };
  return (
    <HeaderBtn onClick={onHeaderBtnClick} display={headerInfo.headerBtnDisplay}>
      <Text font={FONT.MEDIUM_BOLD}>자판기</Text>
    </HeaderBtn>
  );
};

export default VendingMachineBtn;
