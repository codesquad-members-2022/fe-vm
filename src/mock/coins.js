import { getRandomNumber } from 'utils';

const COINS = [
  { AMOUNT: 10, CNT: getNumber1to10() },
  { AMOUNT: 50, CNT: getNumber1to10() },
  { AMOUNT: 100, CNT: getNumber1to10() },
  { AMOUNT: 500, CNT: getNumber1to10() },
  { AMOUNT: 1000, CNT: getNumber1to10() },
  { AMOUNT: 5000, CNT: getNumber1to10() },
  { AMOUNT: 10000, CNT: getNumber1to10() },
];

function getNumber1to10() {
  return getRandomNumber({ min: 0, max: 10 });
}

export default COINS;
