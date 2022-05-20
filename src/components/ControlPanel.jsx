import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';
import ModifiableInput from 'components/ModifiableInput';
import EventLog from 'components/EventLog';
import UnModifiableInput from 'components/UnModifiableInput';

function ControlPanel() {
  const { curMoney, handleReturn } = useContext(MoneyContext);
  const [isInputMode, setInputMode] = useState(false);

  return (
    <Wrap>
      <Row>
        {isInputMode ? (
          <ModifiableInput setInputMode={setInputMode} />
        ) : (
          <UnModifiableInput value={curMoney} handler={handleInputMode} />
        )}
      </Row>
      <button type="button" onClick={handleReturn}>
        반환하기
      </button>
      <EventLog />
    </Wrap>
  );

  function handleInputMode() {
    if (isInputMode) {
      setInputMode(false);
      return;
    }
    setInputMode(true);
  }
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
