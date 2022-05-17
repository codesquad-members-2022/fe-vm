import { units } from '@/Constants';

export default function keepTheChange(price: number, dispatch: any) {
  return [...units].reverse().forEach(unit => {
    dispatch({
      type: 'INCREASE_WALLET_UNIT',
      unit,
      count: Math.floor(price / unit),
    });
    price %= unit;
  });
}
