const COINS = [
  { AMOUNT: 10, CNT: extractNumber1to10() },
  { AMOUNT: 50, CNT: extractNumber1to10() },
  { AMOUNT: 100, CNT: extractNumber1to10() },
  { AMOUNT: 500, CNT: extractNumber1to10() },
  { AMOUNT: 1000, CNT: extractNumber1to10() },
  { AMOUNT: 5000, CNT: extractNumber1to10() },
  { AMOUNT: 10000, CNT: extractNumber1to10() },
];

function extractNumber1to10() {
  return getRandomNumber({ min: 0, max: 10 });
}

function getRandomNumber({ min, max }) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

export default COINS;
