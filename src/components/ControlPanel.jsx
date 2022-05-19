import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MoneyContext } from 'components/App';
import ModifiableInput from 'components/ModifiableInput';

function ControlPanel() {
  const { curMoney } = useContext(MoneyContext);
  const [inputValue, setInputValue] = useState(curMoney);
  const [isInputMode, setInputMode] = useState(false);
  const UnmodifiableInput = React.useCallback(
    () => getUnmodifiableInput({ value: curMoney, handler: handleInputMode }),
    [curMoney, handleInputMode],
  );

  return (
    <Wrap>
      <Row>
        {isInputMode ? (
          <ModifiableInput
            moneyDisplayed={inputValue}
            handler={handleModifiableInput}
            setInputMode={setInputMode}
          />
        ) : (
          <UnmodifiableInput />
        )}
      </Row>
      <button type="button">반환하기</button>
      <EventLog />
    </Wrap>
  );

  function handleModifiableInput(e) {
    const { value } = e.target;
    setInputValue(value);
  }

  function handleInputMode() {
    if (isInputMode) {
      setInputMode(false);
      return;
    }
    setInputMode(true);
  }
}

function getUnmodifiableInput({ value, handler }) {
  return (
    <>
      <Money onClick={handler}>{value}</Money>
      <Unit value="원" />
    </>
  );
}

function Unit({ value }) {
  return <span>{value}</span>;
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

const Money = styled.div({
  width: '100%',
  textAlign: 'right',
  border: '1px solid black',
  paddingRight: '5px',
});

const EventLog = styled.div({
  border: '1px solid black',
  height: '100%',
  overflowY: 'auto',
});
