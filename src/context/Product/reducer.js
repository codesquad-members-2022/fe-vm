import { INIT_PRODUCT, BUY_PRODUCT } from 'context/Product/action';

const initProducts = (_, payload) => {
  return { productData: payload };
};

const buyProducts = (state, payload) => {
  const { productData } = state;
  const { selectedId } = payload;
  const newProductData = productData.map(product => {
    if (product.id !== selectedId) return product;
    return { ...product, stock: product.stock - 1 };
  });
  return { productData: newProductData };
};

const actionFunc = {
  [INIT_PRODUCT]: initProducts,
  [BUY_PRODUCT]: buyProducts,
};

const reducer = (state, { type, payload }) => actionFunc[type](state, payload) || state;

export default reducer;
