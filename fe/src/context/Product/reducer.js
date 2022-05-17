import { ADD_TARGET_PRODUCT, GET_PRODUCTS, SUBSTRACT_TARGET_PRODUCT } from './type';

export const initState = {
  products: [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ADD_TARGET_PRODUCT:
      return {
        ...state,
        products: setNewTargetProduct(state.products, payload),
      };
    case SUBSTRACT_TARGET_PRODUCT:
      return {
        ...state,
        products: setNewTargetProduct(state.products, payload),
      };
    default:
      return { ...state };
  }
};

const setNewTargetProduct = (prevProducts, newTargetProduct) => {
  const newProducts = prevProducts.map(product => {
    if (product.id === newTargetProduct.id) {
      return newTargetProduct;
    }
    return product;
  });
  return newProducts;
};
