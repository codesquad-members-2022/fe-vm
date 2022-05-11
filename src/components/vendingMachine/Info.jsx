import styled from "styled-components";

import InputCoin from "./InputCoin";
import ReturnBtn from "./ReturnBtn";
import LogMessage from "./LogMessage";
import messages from "../../mock/logMessage";

const InfoWrap = styled.div`
  width: 35%;
  text-align: center;
  padding-top: 6%;
  border: 10px solid darkGrey;
  border-radius: 10px;
`;

const Info = () => {
  return (
    <InfoWrap>
      <InputCoin />
      <ReturnBtn />
      <LogMessage messages={messages} />
    </InfoWrap>
  );
};

export default Info;
