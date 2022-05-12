import { getRandomNumber } from 'utils';

const UNITS_MONEY = [10, 50, 100, 500, 1000, 5000, 10000];
const COINS = UNITS_MONEY.map((x) => ({
  AMOUNT: x,
  CNT: getRandomNumber({ min: 0, max: 10 }),
}));

export default COINS;
