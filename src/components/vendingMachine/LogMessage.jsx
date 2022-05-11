import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";

const LogMessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  margin: 5% auto 0 auto;
  border-radius: 10px;
  border: 9px solid black;
  background-color: white;
  overflow: hidden;
  padding-top: 4%;
`;

const LogMessage = ({ messages }) => {
  return (
    <LogMessageWrap>
      {messages.map((message, idx) => {
        return (
          <Text key={message + idx} font={FONT.MEDIUM_BOLD}>
            {message}
          </Text>
        );
      })}
    </LogMessageWrap>
  );
};

export default LogMessage;
