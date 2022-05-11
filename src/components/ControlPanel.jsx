import React, { useContext } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';

function ControlPanel() {
  const { curMoney } = useContext(MoneyContext);
  return (
    <Wrap>
      <Row>
        <Money value={curMoney} />
        <span>원</span>
      </Row>
      <button type="button">반환하기</button>
      <EventLog />
    </Wrap>
  );
}

export default ControlPanel;

const Wrap = styled.div({
  width: '300px',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  gap: '20px',
});

const Row = styled.div({
  display: 'flex',
});

const Money = styled.input({
  width: '100%',
  textAlign: 'right',
});

const EventLog = styled.div({
  border: '1px solid black',
  height: '100%',
  overflowY: 'auto',
});
