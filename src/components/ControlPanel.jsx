/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MoneyContext, CoinContext, EventLogContext } from 'components/App';
import ModifiableInput from 'components/ModifiableInput';
import EventLog from 'components/EventLog';
import { copyObject } from 'utils';

function ControlPanel() {
  const { curMoney, setMoney } = useContext(MoneyContext);
  const { coins, setCoins } = useContext(CoinContext);
  const { eventLog, setEventLog } = useContext(EventLogContext);
  const [isInputMode, setInputMode] = useState(false);
  const UnmodifiableInput = React.useCallback(
    () => getUnmodifiableInput({ value: curMoney, handler: handleInputMode }),
    [curMoney, handleInputMode],
  );

  return (
    <Wrap>
      <Row>
        {isInputMode ? <ModifiableInput setInputMode={setInputMode} /> : <UnmodifiableInput />}
      </Row>
      <button type="button" onClick={handleReturnBtn}>
        반환하기
      </button>
      <EventLog />
    </Wrap>
  );

  function handleReturnBtn() {
    const newCoins = updateCoins();

    setCoins(newCoins);
    setEventLog([...eventLog, { type: 'RETURN', value: curMoney }]);
    setMoney(0);

    function updateCoins() {
      let leftMoney = curMoney;
      const copiedCoins = coins.map(copyObject);
      const updatedCoins = copiedCoins.map((coin) => {
        const quotient = Math.floor(leftMoney / coin.AMOUNT);
        if (quotient) {
          leftMoney -= coin.AMOUNT * quotient;
          return { ...coin, CNT: coin.CNT + quotient };
        }
        return coin;
      });

      return updatedCoins;
    }
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
