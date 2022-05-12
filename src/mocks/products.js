const PRODUCT_NUM = 20;
const PRODUCTS = Array.from({ length: PRODUCT_NUM }).map((_, idx) => ({
  name: `콜라 ${idx + 1}`,
  price: 500 * (idx + 1),
}));

export default PRODUCTS;
