import guid from 'util/guid';

const INITIAL_MONEY = [
  { id: guid(), unit: 10, count: 0 },
  { id: guid(), unit: 50, count: 3 },
  { id: guid(), unit: 100, count: 8 },
  { id: guid(), unit: 500, count: 4 },
  { id: guid(), unit: 1000, count: 3 },
  { id: guid(), unit: 5000, count: 2 },
  { id: guid(), unit: 10000, count: 0 },
];

export default INITIAL_MONEY;
