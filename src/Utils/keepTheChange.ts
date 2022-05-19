import { units } from '@/Constants';
import { WalletAction } from '@/Context/WalletContext';
import { PriceAction } from '@/Context/PriceContext';
import { MessageAction } from '@/Context/MessageContext';
import React from 'react';

export default function keepTheChange(
  price: number,
  walletDispatch: React.Dispatch<WalletAction>,
  priceDispatch: React.Dispatch<PriceAction>,
  messageDispatch: React.Dispatch<MessageAction>,
): void {
  if (price === undefined || price === 0) return;

  messageDispatch({
    type: 'INSERT_MESSAGE',
    unit: 0,
    message: `${price}원 반환됨`,
  });

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
