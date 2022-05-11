import styled from "styled-components";

import Text from "../../Text";
import { FONT } from "../../constants/fonts";

const TotalAmountWrap = styled.div`
  margin-top: 15%;
  width: 80%;
  height: 5%;
  border-radius: 5px;
  border: 3px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TotalAmount = () => {
  return (
    <TotalAmountWrap>
      <Text font={FONT.MEDIUM_BOLD}>총액 : 2000조</Text>
    </TotalAmountWrap>
  );
};

export default TotalAmount;
