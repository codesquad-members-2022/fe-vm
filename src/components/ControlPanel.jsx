import React from 'react';
import styled from 'styled-components';

function ControlPanel() {
  return (
    <Wrap>
      <Row>
        <Money />
        <Unit>원</Unit>
      </Row>
      <ReturnBtn>반환하기</ReturnBtn>
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

const Unit = styled.span({});

const ReturnBtn = styled.button({});

const EventLog = styled.div({
  border: '1px solid black',
  height: '100%',
  overflowY: 'auto',
});
