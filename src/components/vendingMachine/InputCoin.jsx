import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";

const InfoWrap = styled.div`
  width: 80%;
  height: 10%;
  margin: 5% auto 0 auto;
  border-radius: 10px;
  border: 9px solid black;
  font-size: 18px;
  text-align: center;
  background-color: white;
`;
const InputCoins = styled.input`
  width: 80%;
  height: 50%;
  margin-top: 5%;
  font-size: 18px;
  text-align: right;
  border: none;
  outline: none;
`;

const InputCoin = () => {
  return (
    <InfoWrap>
      <InputCoins placeholder="금액을 입력하세요"></InputCoins>
      <Text font={FONT.LARGE_BOLD}>원</Text>
    </InfoWrap>
  );
};

export default InputCoin;
