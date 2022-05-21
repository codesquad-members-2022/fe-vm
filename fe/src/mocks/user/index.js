export const getTotalBalance = units => units.reduce((acc, cur) => acc + cur.unit * cur.count, 0);

export const defaultChangeUnits = [
  { id: 10, unit: 10, count: 0 },
  { id: 500, unit: 500, count: 0 },
  { id: 50, unit: 50, count: 0 },
  { id: 100, unit: 100, count: 0 },
  { id: 5000, unit: 5000, count: 0 },
  { id: 1000, unit: 1000, count: 0 },
  { id: 10000, unit: 10000, count: 0 },
];

export const userBalance = 17200;

export const userDefaultInfo = {
  nickname: '도리',
  totalBalance: 0,
  changesUnits: defaultChangeUnits,
  isManager: false,
};

export const defaultMangerUnits = [
  { id: 10, unit: 10, count: 100 },
  { id: 50, unit: 50, count: 100 },
  { id: 100, unit: 100, count: 100 },
  { id: 500, unit: 500, count: 100 },
  { id: 5000, unit: 5000, count: 100 },
  { id: 1000, unit: 1000, count: 100 },
  { id: 10000, unit: 10000, count: 100 },
];

export const managerBalance = getTotalBalance(defaultMangerUnits);
