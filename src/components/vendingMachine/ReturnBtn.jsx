import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";

const ReturnBtnWrap = styled.div`
  padding-top: 3%;
  width: 80%;
  height: 10%;
  margin: 5% auto 0 auto;
  border-radius: 10px;
  border: 9px solid black;
  text-align: center;
  background-color: white;
`;

const ReturnBtn = () => {
  return (
    <ReturnBtnWrap>
      <Text font={FONT.LARGE_BOLD}>반환</Text>
    </ReturnBtnWrap>
  );
};

export default ReturnBtn;
