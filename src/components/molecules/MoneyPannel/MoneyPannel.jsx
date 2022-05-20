import { useState, useRef, useContext } from 'react';
import { MoneyContext } from 'context/MoneyContext';

function MoneyPannel() {
  const inputRef = useRef(false);
  const [isInputClicked, setIsInputClicked] = useState(false);
  const {
    walletMoney,
    totalWalletMoney,
    updateInsertedMoney,
    updateWalletMoney,
  } = useContext(MoneyContext);

  function displayInputButton(event) {
    event.preventDefault();
    setIsInputClicked(true);
  }

  function calculateRemainingMoney(inputMoney) {
    const reversedMoneyArray = [...walletMoney].reverse();
    const remainingMoney = reversedMoneyArray.reduce((balance, money) => {
      let result = 0;
      if (money.unit.toString().startsWith('5')) {
        const inputMoneyDigit = Math.floor(balance / (money.unit / 5));
        const quotient = Math.floor(inputMoneyDigit / 5);
        if (inputMoneyDigit >= 5 && money.count >= quotient) {
          result = balance - money.unit * quotient;
          updateInsertedMoney(money.id, 'increment', quotient);
          updateWalletMoney(money.id, 'decrement', quotient);
          return result;
        }
        if (inputMoneyDigit >= 5 && money.count < quotient) {
          result = balance - money.unit * money.count;
          updateInsertedMoney(money.id, 'increment', money.count);
          updateWalletMoney(money.id, 'decrement', money.count);
          return result;
        }
      } else {
        const inputMoneyDigit = Math.floor(balance / money.unit);
        if (inputMoneyDigit < money.count) {
          result = balance - money.unit * inputMoneyDigit;
          updateInsertedMoney(money.id, 'increment', inputMoneyDigit);
          updateWalletMoney(money.id, 'decrement', inputMoneyDigit);
          return result;
        }
        if (inputMoneyDigit >= money.count) {
          result = balance - money.unit * money.count;
          updateInsertedMoney(money.id, 'increment', inputMoneyDigit);
          updateWalletMoney(money.id, 'decrement', money.count);
          return result;
        }
      }
      return result;
    }, inputMoney);
    return remainingMoney;
  }

  function reviseInputMoney(inputMoney) {
    const money = inputMoney > totalWalletMoney ? totalWalletMoney : inputMoney;
    const remainingMoney = calculateRemainingMoney(money);
    const revisedInputMoney = money - remainingMoney;
    return revisedInputMoney;
  }

  function updateInputMoney(event) {
    event.preventDefault();
    const inputMoney = Number(inputRef.current.value);
    inputRef.current.value = reviseInputMoney(inputMoney);
  }

  return (
    <form>
      <input type="text" ref={inputRef} onClick={displayInputButton} />
      {isInputClicked && (
        <button type="button" onClick={updateInputMoney}>
          insert
        </button>
      )}
    </form>
  );
}
export default MoneyPannel;
