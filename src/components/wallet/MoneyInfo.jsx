import styled from "styled-components";

import Text from "../../Text";
import { FONT } from "../../constants/fonts";

const MoneyInfoWrap = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
`;
const MoneyWrap = styled.div`
  width: 50%;
  border-radius: 5px;
  border: 3px solid black;
`;
const AmountWrap = styled.div``;

const MoneyInfo = ({ money }, key) => {
  return (
    <MoneyInfoWrap key={key}>
      <MoneyWrap>
        <Text key={{ key } + 10} font={FONT.MEDIUM_BOLD}>
          {money.type}원
        </Text>
      </MoneyWrap>
      <AmountWrap>
        <Text key={{ key } + 20} font={FONT.MEDIUM_BOLD}>
          {money.amount}개
        </Text>
      </AmountWrap>
    </MoneyInfoWrap>
  );
};

export default MoneyInfo;
