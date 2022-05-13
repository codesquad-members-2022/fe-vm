import React, { useContext } from 'react';

import WalletItem from '../components/WalletItem';
import { MoneyContext } from '../context/MoneyProvider';
import { PriceContext } from '../context/PriceProvider';

export default function Wallet() {
  const { moneyState, decreaseMoney } = useContext(MoneyContext);
  const { setInputPrice, updatePrice, remainMoney, setRemainMoney } =
    useContext(PriceContext);

  const handleClickWon = (won) => {
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
            onClick={() => handleClickWon(won)}
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
