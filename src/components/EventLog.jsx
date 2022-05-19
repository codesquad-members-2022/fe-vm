import React, { useContext } from 'react';
import styled from 'styled-components';
import { EventLogContext } from 'components/App';

function EventLog() {
  const { eventLog } = useContext(EventLogContext);

  return (
    <Wrap>
      {eventLog.map(({ type, value }) => (
        <Row>
          <div>{type}</div>
          <div>{value}</div>
        </Row>
      ))}
    </Wrap>
  );
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
