import { useContext } from 'react';
import styled from 'styled-components';

import { COLORS } from 'constants';
import { LogMessagesContext } from 'context';
import LogMessage from 'components/VendingMachine/LogMessage';

const LogMessages = () => {
  const { logMessages } = useContext(LogMessagesContext);

  return (
    <LogMessagesContainer>
      {logMessages.map(logMessage => (
        <LogMessage key={logMessage.id} {...logMessage} />
      ))}
    </LogMessagesContainer>
  );
};

const LogMessagesContainer = styled.ul`
  grid-area: LogMessages;
  padding: 24px;
  border-radius: 24px;
  background: ${COLORS.GRAY_1};
  overflow-y: scroll;
`;

export default LogMessages;
