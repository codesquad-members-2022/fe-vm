import { getRandomNumber } from 'utils';

const PRODUCT_NUM = 20;
const PRODUCTS = Array.from({ length: PRODUCT_NUM }).map((_, idx) => ({
  id: idx,
  name: `콜라 ${idx + 1}`,
  price: 500 * (idx + 1),
  stock: getRandomNumber({ min: 0, max: 10 }),
}));

export default PRODUCTS;
