import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { ErrorContext, CoinContext, MoneyContext, EventLogContext } from 'components/App';
import { copyObject } from 'utils';
import { MESSAGES } from 'constants/messages';

function ModifiableInput({ setInputMode }) {
  const { curMoney } = useContext(MoneyContext);
  const { showErrorMsg } = useContext(ErrorContext);
  const { coins, setCoins } = useContext(CoinContext);
  const { eventLog, setEventLog } = useContext(EventLogContext);
  const { setMoney } = useContext(MoneyContext);
  const [inputValue, setInputValue] = useState(curMoney);

  return (
    <>
      <Input type="number" onChange={handleModifiableInput} value={inputValue} />
      <span>원</span>
      <button onClick={handleClickedInputBtn} type="button">
        투입
      </button>
    </>
  );

  function handleClickedInputBtn() {
    const moneyRequestedToBeCharged = Number(inputValue);
    const [newMoney, newCoins] = chargeMoney(moneyRequestedToBeCharged);

    const canChargePreciselyMoneyRequested = moneyRequestedToBeCharged === newMoney;
    if (!canChargePreciselyMoneyRequested) {
      showErrorMsg(MESSAGES.ERROR.CANT_CHARGE_PRECISELY);
    }

    setMoney(newMoney);
    setCoins(newCoins);
    setInputMode(false);
    setEventLog([...eventLog, { type: 'CHARGE', value: newMoney }]);

    function chargeMoney(money) {
      let moneyCharged = 0;
      let moneyToBeCharged = money;
      const copiedCoins = coins.map(copyObject);
      const updatedCoins = copiedCoins.map(updateCnt);

      return [moneyCharged, updatedCoins];

      function updateCnt(coin) {
        const { AMOUNT, CNT } = coin;
        const quotient = Math.floor(moneyToBeCharged / AMOUNT);
        const hasEnoughCoins = CNT >= quotient;

        if (hasEnoughCoins) {
          moneyCharged += AMOUNT * quotient;
          moneyToBeCharged -= AMOUNT * quotient;
          return { ...coin, CNT: CNT - quotient };
        }
        moneyCharged += AMOUNT * CNT;
        moneyToBeCharged -= AMOUNT * CNT;
        return { ...coin, CNT: 0 };
      }
    }
  }

  function handleModifiableInput(e) {
    const { value } = e.target;
    setInputValue(value);
  }
}

const Input = styled.input`
  width: '75%';
  text-align: right;
  border: '1px solid black';
  padding-right: '5px';
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default ModifiableInput;
