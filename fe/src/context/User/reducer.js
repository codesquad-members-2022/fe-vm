const {
  USER_LOGIN,
  USER_LOGOUT,
  ORDER_PRODUCT,
  INSERT_CHANGES,
  RETURN_CHANGES,
  ADD_TARGET_BALANCE,
  SUBSTRACT_TARGET_BALANCE,
} = require('./type');

const CHANGES_UNITS = [
  { id: 10, unit: 10, count: 0 },
  { id: 50, unit: 50, count: 0 },
  { id: 100, unit: 100, count: 0 },
  { id: 500, unit: 500, count: 0 },
  { id: 1000, unit: 1000, count: 0 },
  { id: 5000, unit: 5000, count: 0 },
  { id: 10000, unit: 10000, count: 0 },
];

export const initState = {
  nickname: null,
  totalBalance: 0,
  changesUnits: CHANGES_UNITS,
  prevInputChanges: [],
  isManager: false,
};

export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN: {
      const { nickname, totalBalance, changesUnits, isManager } = payload;
      return { ...state, nickname, totalBalance, changesUnits, isManager };
    }
    case USER_LOGOUT:
      return { ...state };
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
      return {
        ...state,
        totalBalance: newTotalBalance,
        changesUnits: newChangesUnits,
        prevInputChanges: [],
      };
    }
    case ORDER_PRODUCT: {
      const { newTotalBalance, newChangesUnits } = payload;
      return {
        ...state,
        totalBalance: newTotalBalance,
        changesUnits: newChangesUnits,
        prevInputChanges: [],
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
