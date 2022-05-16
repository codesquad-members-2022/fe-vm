import { getRandomNumber } from 'utils';

const UNITS_MONEY = [10000, 5000, 1000, 500, 100, 50, 10];
const COINS = UNITS_MONEY.map((unit) => ({
  AMOUNT: unit,
  CNT: getRandomNumber({ min: 0, max: 10 }),
}));

export default COINS;
