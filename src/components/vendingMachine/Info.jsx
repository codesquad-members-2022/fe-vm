import styled from "styled-components";

import InputCoin from "./InputCoin";
import ReturnBtn from "./ReturnBtn";
import LogMessage from "./LogMessage";

const Info = () => {
  return (
    <InfoWrap>
      <InputCoin />
      <ReturnBtn />
      <LogMessage />
    </InfoWrap>
  );
};

const InfoWrap = styled.div`
  width: 35%;
  text-align: center;
  padding-top: 6%;
  border: 10px solid darkGrey;
  border-radius: 10px;
`;

export default Info;
