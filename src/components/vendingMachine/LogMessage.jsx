import styled from "styled-components";

import { FONT } from "../../constants/fonts";
import Text from "../../Text";
import VmWalletContextStore from "../../stores/VmWalletStore";
import { useContext, useEffect } from "react";

const LogMessage = () => {
  const VmWalletInfo = useContext(VmWalletContextStore);
  const lastLogIdx = 10;

  useEffect(() => {
    if (VmWalletInfo.logMessage.length > 10) {
      VmWalletInfo.setLogMessage([VmWalletInfo.logMessage[lastLogIdx]]);
    }
  });

  return (
    <LogMessageWrap>
      {VmWalletInfo.logMessage.map((message, idx) => {
        return (
          <Text key={message + idx} font={FONT.MEDIUM_BOLD}>
            {message}
          </Text>
        );
      })}
    </LogMessageWrap>
  );
};

const LogMessageWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 60%;
  margin: 25% auto 0 auto;
  border-radius: 10px;
  box-shadow: inset 3px 3px 30px 5px grey;
  background-color: white;
  overflow: hidden;
  padding-top: 4%;
`;

export default LogMessage;
