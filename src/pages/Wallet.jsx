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
      <span>
        {`${`${moneyState
          .map(({ won, num }) => won * num)
          .reduce((aMoney, bMoney) => aMoney + bMoney)}`
          .split('')
          .reverse()
          .map((element, index, array) => {
            if ((index + 1) % 3 === 0 && index + 1 < array.length) {
              return `,${element}`;
            }
            return element;
          })
          .reverse()
          .join('')}원`}
      </span>
    </>
  );
}
