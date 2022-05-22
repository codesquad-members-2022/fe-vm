import React, { useContext } from 'react';
import styled from 'styled-components';
import { EventLogContext, ErrorContext } from 'components/App';
import { MESSAGES } from 'constants/messages';

function EventLog() {
  const { eventLog } = useContext(EventLogContext);
  const { showErrorMsg } = useContext(ErrorContext);

  return <Wrap>{eventLog.map(createEventLog)}</Wrap>;

  function createEventLog({ type, value }, idx) {
    if (type === 'CHARGE') {
      return (
        <Row key={`${type}-${idx}`}>
          <div>{value}원을 충전했습니다.</div>
        </Row>
      );
    }
    if (type === 'PURCHASE') {
      return (
        <Row key={`${type}-${idx}`}>
          <div>{value}을(를) 구매했습니다.</div>
        </Row>
      );
    }
    if (type === 'RETURN') {
      return (
        <Row key={`${type}-${idx}`}>
          <div>{value}원을 반환했습니다.</div>
        </Row>
      );
    }
    showErrorMsg(MESSAGES.ERROR.NOT_DEFIEND_EVENT_LOG_TYPE);
    return new Error(MESSAGES.ERROR.NOT_DEFIEND_EVENT_LOG_TYPE);
  }
}

export default EventLog;

const Wrap = styled.div({
  border: '1px solid black',
  height: '328px',
  overflowY: 'scroll',
});

const Row = styled.div`
  display: flex;
  justify-content: space-between;
`;
