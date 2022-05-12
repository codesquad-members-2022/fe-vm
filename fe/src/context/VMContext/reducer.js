import { GET_PRODUCTS, GET_REST_UNITS } from './type';

const CHANGES_UNITS = [
  { id: 10, unit: 10, count: 0 },
  { id: 500, unit: 500, count: 0 },
  { id: 50, unit: 50, count: 0 },
  { id: 100, unit: 100, count: 0 },
  { id: 5000, unit: 5000, count: 0 },
  { id: 1000, unit: 1000, count: 0 },
  { id: 10000, unit: 10000, count: 0 },
];

const TOTAL_BALANCE = 23500;

export const vmInitiState = {
  totalBalance: TOTAL_BALANCE,
  changesUnits: CHANGES_UNITS,
  products: [],
};

export const vmReducer = (state, action) => {
  switch (action.type) {
    case GET_REST_UNITS:
      return {
        ...state,
        changesUnits: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return { ...state };
  }
};
