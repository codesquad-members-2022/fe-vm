import React from 'react';

import WalletItem from '../components/WalletItem';
import { money } from '../store/store';

export default function Wallet() {
  const handleClickWon = () => {
    // Todo : store의 setPrice(won)
  };

  return (
    <>
      <ul>
        {money.map(({ won, num }) => (
          <WalletItem
            key={`money-${won}`}
            icon={`${won}원 `}
            won={won}
            num={num}
            onClick={handleClickWon}
          />
        ))}
      </ul>
      <span>
        {`${`${money
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
