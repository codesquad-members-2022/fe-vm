import { ADD_TARGET_PRODUCT, GET_PRODUCTS, SUBSTRACT_TARGET_PRODUCT } from './type';

export const initState = {
  products: [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS: {
      const { products } = payload;
      return {
        ...state,
        products,
      };
    }
    case ADD_TARGET_PRODUCT: {
      const { targetProduct } = payload;
      const newProducts = getNewTargetProduct(state.products, targetProduct);
      return {
        ...state,
        products: newProducts,
      };
    }
    case SUBSTRACT_TARGET_PRODUCT: {
      const { targetProduct } = payload;
      const newProducts = getNewTargetProduct(state.products, targetProduct);
      return {
        ...state,
        products: newProducts,
      };
    }
    default:
      return { ...state };
  }
};

const getNewTargetProduct = (prevProducts, newTargetProduct) => {
  const newProducts = prevProducts.map(product => {
    if (product.id === newTargetProduct.id) {
      return newTargetProduct;
    }
    return product;
  });
  return newProducts;
};
