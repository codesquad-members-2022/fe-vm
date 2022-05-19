import React, { useContext } from 'react';
import styled from 'styled-components';
import { CoinContext, MoneyContext } from 'components/App';
import { copyObject } from 'utils';

function ModifiableInput({ moneyDisplayed, handler, setInputMode }) {
  const { coins, setCoins } = useContext(CoinContext);
  const { setMoney } = useContext(MoneyContext);
  return (
    <>
      <Input type="number" onChange={handler} value={moneyDisplayed} />
      <span>원</span>
      <button onClick={handleClickedInputBtn} type="button">
        투입
      </button>
    </>
  );
  function handleClickedInputBtn() {
    const moneyRequestedToBeCharged = Number(moneyDisplayed);
    const [newMoney, newCoins] = chargeMoney(moneyRequestedToBeCharged);

    setMoney(newMoney);
    setCoins(newCoins);
    setInputMode(false);

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
