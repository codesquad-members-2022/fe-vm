import { units } from '@/Constants';
import { WalletAction } from '@/Context/WalletContext';
import { PriceAction } from '@/Context/PriceContext';
import React from 'react';

export default function keepTheChange(
  price: number,
  walletDispatch: React.Dispatch<WalletAction>,
  priceDispatch?: React.Dispatch<PriceAction>,
): void {
  if (price === undefined) return;

  [...units].reverse().forEach(unit => {
    walletDispatch({
      type: 'INCREASE_WALLET_UNIT',
      unit,
      count: Math.floor(price / unit),
    });
    price %= unit;
  });

  priceDispatch({
    type: 'DELETE_ALL_PRICE',
  });
}
