export const products = [
  {
    id: 1,
    name: 'Holdlamis',
    price: 700,
    stock: 99,
  },
  {
    id: 2,
    name: 'Kanlam',
    price: 500,
    stock: 100,
  },
  {
    id: 3,
    name: 'Daltfresh',
    price: 900,
    stock: 3,
  },
  {
    id: 4,
    name: 'Transcof',
    price: 800,
    stock: 6,
  },
  {
    id: 5,
    name: 'Zamit',
    price: 500,
    stock: 7,
  },
  {
    id: 6,
    name: 'Bigtax',
    price: 500,
    stock: 4,
  },
  {
    id: 7,
    name: 'Temp',
    price: 600,
    stock: 5,
  },
  {
    id: 8,
    name: 'Redhold',
    price: 700,
    stock: 6,
  },
  {
    id: 9,
    name: 'Solarbreeze',
    price: 800,
    stock: 8,
  },
  {
    id: 10,
    name: 'Andalax',
    price: 700,
    stock: 9,
  },
  {
    id: 11,
    name: 'Ronstring',
    price: 900,
    stock: 7,
  },
  {
    id: 12,
    name: 'Bitwolf',
    price: 800,
    stock: 6,
  },
  {
    id: 13,
    name: 'Asoka',
    price: 600,
    stock: 5,
  },
  {
    id: 14,
    name: 'Sonsing',
    price: 1000,
    stock: 4,
  },
  {
    id: 15,
    name: 'Domainer',
    price: 500,
    stock: 0,
  },
  {
    id: 16,
    name: 'Biodex',
    price: 500,
    stock: 1,
  },
  {
    id: 17,
    name: 'Wrapsafe',
    price: 800,
    stock: 2,
  },
  {
    id: 18,
    name: 'Bytecard',
    price: 500,
    stock: 3,
  },
  {
    id: 19,
    name: 'Biodex',
    price: 1000,
    stock: 4,
  },
  {
    id: 20,
    name: 'Y-find',
    price: 700,
    stock: 5,
  },
  {
    id: 21,
    name: 'Biodex',
    price: 1000,
    stock: 6,
  },
  {
    id: 22,
    name: 'Sub-Ex',
    price: 1000,
    stock: 7,
  },
  {
    id: 23,
    name: 'Zontrax',
    price: 500,
    stock: 8,
  },
  {
    id: 24,
    name: 'Lotlux',
    price: 1000,
    stock: 9,
  },
  {
    id: 25,
    name: 'Flowdesk',
    price: 500,
    stock: 10,
  },
  {
    id: 26,
    name: 'Flowdesk',
    price: 500,
    stock: 0,
  },
];

export const coins = [
  {
    id: '10',
    amount: 10,
    count: 1,
  },
  {
    id: '50',
    amount: 50,
    count: 1,
  },
  {
    id: '100',
    amount: 100,
    count: 1,
  },
  {
    id: '500',
    amount: 500,
    count: 1,
  },
  {
    id: '1000',
    amount: 1000,
    count: 1,
  },
  {
    id: '5000',
    amount: 5000,
    count: 1,
  },
  {
    id: '10000',
    amount: 10000,
    count: 1,
  },
];

export const logs = [];

export const totalInputAmount = 0;

export const balance = Object.values(coins).reduce((acc, cur) => {
  return acc + cur.amount * cur.count;
}, 0);
