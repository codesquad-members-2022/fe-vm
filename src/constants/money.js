import guid from 'util/guid';

const MONEY_ID = {
  id1: guid(),
  id2: guid(),
  id3: guid(),
  id4: guid(),
  id5: guid(),
  id6: guid(),
  id7: guid(),
};

const WALLET_MONEY = [
  { id: MONEY_ID.id1, unit: 10, count: 1 },
  { id: MONEY_ID.id2, unit: 50, count: 3 },
  { id: MONEY_ID.id3, unit: 100, count: 8 },
  { id: MONEY_ID.id4, unit: 500, count: 6 },
  { id: MONEY_ID.id5, unit: 1000, count: 5 },
  { id: MONEY_ID.id6, unit: 5000, count: 4 },
  { id: MONEY_ID.id7, unit: 10000, count: 2 },
];

const INPUT_MONEY = [
  { id: MONEY_ID.id1, unit: 10, count: 0 },
  { id: MONEY_ID.id2, unit: 50, count: 0 },
  { id: MONEY_ID.id3, unit: 100, count: 0 },
  { id: MONEY_ID.id4, unit: 500, count: 0 },
  { id: MONEY_ID.id5, unit: 1000, count: 0 },
  { id: MONEY_ID.id6, unit: 5000, count: 0 },
  { id: MONEY_ID.id7, unit: 10000, count: 0 },
];

export { WALLET_MONEY, INPUT_MONEY };
