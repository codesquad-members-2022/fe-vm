import { useContext } from 'react';
import styled from 'styled-components';

import { COLORS, MESSAGE_TYPES } from 'constants';
import { LogMessagesContext } from 'context';
import { addZero } from 'util/util';

const getLogTime = date =>
  `${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;

const getLogType = type => MESSAGE_TYPES[type];

const LogMessage = ({ date, type, value }) => {
  const { getLogContent } = useContext(LogMessagesContext);
  const logTime = getLogTime(date);
  const logType = getLogType(type);
  const logContent = getLogContent(type, value);

  const messageLine = `${logTime} [${logType}] ${logContent}`;

  return <LogMessageContainer type={type}>{messageLine}</LogMessageContainer>;
};

const LogMessageContainer = styled.li`
  padding: 4px 0;
  color: ${({ type }) => {
    if (
      type === 'CASH_INSERTED_SCOPE_FAILED' ||
      type === 'CASH_INSERTED_UNIT_FAILED' ||
      type === 'CASH_INSERTED_BALANCE_FAILED'
    )
      return `${COLORS.RED}`;
    if (type === 'CASH_INSERTED' || type === 'CASH_RETRUNED' || type === 'CASH_AUTO_RETURNED')
      return `${COLORS.BLUE}`;
  }};
`;

export default LogMessage;
