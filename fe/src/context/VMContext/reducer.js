import {
  ADD_TARGET_BALANCE,
  ADD_TARGET_PRODUCT,
  GET_BALANCE,
  GET_PRODUCTS,
  SUBSTRACT_TARGET_BALANCE,
  SUBSTRACT_TARGET_PRODUCT,
} from './type';

const CHANGES_UNITS = [
  { id: 10, unit: 10, count: 0 },
  { id: 50, unit: 50, count: 0 },
  { id: 100, unit: 100, count: 0 },
  { id: 500, unit: 500, count: 0 },
  { id: 1000, unit: 1000, count: 0 },
  { id: 5000, unit: 5000, count: 0 },
  { id: 10000, unit: 10000, count: 0 },
];

export const vmInitiState = {
  totalBalance: 0,
  changesUnits: CHANGES_UNITS,
  products: [],
};

export const vmReducer = (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_TARGET_PRODUCT:
      return {
        ...state,
        products: setNewTargetProduct(state.products, action.payload),
      };
    case SUBSTRACT_TARGET_PRODUCT:
      return {
        ...state,
        products: setNewTargetProduct(state.products, action.payload),
      };
    case GET_BALANCE:
      return {
        ...state,
        totalBalance: action.payload.totalBalance,
        changesUnits: action.payload.changesUnits,
      };
    case ADD_TARGET_BALANCE:
      return {
        ...state,
        totalBalance: action.payload.newTotalBalance,
        changesUnits: action.payload.newChangeUnits,
      };
    case SUBSTRACT_TARGET_BALANCE:
      return {
        ...state,
        totalBalance: action.payload.newTotalBalance,
        changesUnits: action.payload.newChangeUnits,
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
