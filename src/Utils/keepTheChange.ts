import { units } from '@/Constants';
import { WalletAction } from '@/Context/WalletContext';
import React from 'react';

export default function keepTheChange(
  price: number,
  dispatch: React.Dispatch<WalletAction>,
): void {
  return [...units].reverse().forEach(unit => {
    dispatch({
      type: 'INCREASE_WALLET_UNIT',
      unit,
      count: Math.floor(price / unit),
    });
    price %= unit;
  });
}
