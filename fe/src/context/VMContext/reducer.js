import {
  ADD_TARGET_BALANCE,
  ADD_TARGET_PRODUCT,
  GET_BALANCE,
  GET_PRODUCTS,
  INSERT_CHANGES,
  ORDER_PRODUCT,
  RETURN_CHANGES,
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
  prevInputChanges: [],
  products: [],
};

export const vmReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case ORDER_PRODUCT:
      return {
        ...state,
        products: setNewTargetProduct(state.products, payload),
      };
    case INSERT_CHANGES: {
      const { changesUnits, prevInputChanges, totalBalance } = state;
      const [newChangesUnits, newPrevInputChanges, newTotalBalance] = updateprevInputChanges(
        changesUnits,
        prevInputChanges,
        totalBalance,
        payload,
      );
      return {
        ...state,
        totalBalance: newTotalBalance,
        prevInputChanges: newPrevInputChanges,
        changesUnits: newChangesUnits,
      };
    }
    case RETURN_CHANGES: {
      const { changesUnits, prevInputChanges, totalBalance } = state;
      const [newChangesUnits, newTotalBalance] = returnChanges(
        changesUnits,
        prevInputChanges,
        totalBalance,
      );
      return { ...state, totalBalance: newTotalBalance, changesUnits: newChangesUnits };
    }
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
    case GET_BALANCE: {
      const { totalBalance, changesUnits } = payload;
      return {
        ...state,
        totalBalance,
        changesUnits,
      };
    }
    case ADD_TARGET_BALANCE: {
      const { newTotalBalance, newChangesUnits } = payload;
      return {
        ...state,
        totalBalance: newTotalBalance,
        changesUnits: newChangesUnits,
      };
    }
    case SUBSTRACT_TARGET_BALANCE: {
      const { newTotalBalance, newChangesUnits } = payload;
      return {
        ...state,
        totalBalance: newTotalBalance,
        changesUnits: newChangesUnits,
      };
    }
    default:
      return { ...state };
  }
};

const returnChanges = (changesUnits, prevInputChanges, totalBalance) => {
  const newChangesUnits = [...changesUnits];
  let newTotalBalance = totalBalance;
  prevInputChanges.forEach(id => {
    const targetIndex = newChangesUnits.findIndex(unit => unit.id === id);
    const targetUnit = newChangesUnits[targetIndex];
    newTotalBalance += targetUnit.unit;
    newChangesUnits[targetIndex] = { ...targetUnit, count: targetUnit.count + 1 };
  });
  return [newChangesUnits, newTotalBalance];
};

const updateprevInputChanges = (changesUnits, prevInputChanges, totalBalance, unitId) => {
  const newPrevInputChanges = [...prevInputChanges];
  let newTotalBalance = totalBalance;
  const newChangesUnits = changesUnits.map(unit => {
    if (unit.id === unitId && unit.count > 0) {
      newPrevInputChanges.push(unitId);
      newTotalBalance -= unit.unit;
      return { ...unit, count: unit.count - 1 };
    }
    return unit;
  });
  return [newChangesUnits, newPrevInputChanges, newTotalBalance];
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
