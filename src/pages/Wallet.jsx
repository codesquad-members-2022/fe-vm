import React, { useContext } from 'react';

import WalletItem from '../components/WalletItem';
import { MoneyContext } from '../context/MoneyProvider';
import { PriceContext } from '../context/PriceProvider';

export default function Wallet() {
  const { moneyState, decreaseMoney } = useContext(MoneyContext);
  const { setInputPrice, updatePrice, remainMoney, setRemainMoney } =
    useContext(PriceContext);

  const handleClickWon = (won, num) => {
    if (num < 1) {
      window.alert('돈이 부족합니다.');
      return;
    }

    decreaseMoney(won);
    setInputPrice(won);
    updatePrice(won);
    setRemainMoney(remainMoney + won);
  };

  const addUnitNotation = (element, index, array) => {
    const unitPosition = 3;
    const isHighestDigit = index + 1 === array.length;
    const hasUnitNotation = (index + 1) % unitPosition === 0 && !isHighestDigit;

    return hasUnitNotation ? `,${element}` : element;
  };

  const toatlPrice = moneyState
    .map(({ won, num }) => won * num)
    .reduce((aMoney, bMoney) => aMoney + bMoney);

  const totalPriveWithUnitNotation = `${toatlPrice}`
    .split('')
    .reverse()
    .map((element, index, array) => addUnitNotation(element, index, array))
    .reverse()
    .join('');

  return (
    <>
      <ul>
        {moneyState.map(({ won, num }) => (
          <WalletItem
            key={`money-${won}`}
            icon={`${won}원 `}
            won={won}
            num={num}
            onClick={() => handleClickWon(won, num)}
          />
        ))}
      </ul>
      <span>{`${totalPriveWithUnitNotation}`}</span>
    </>
  );
}
