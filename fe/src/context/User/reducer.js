import {
  USER_LOGIN,
  USER_LOGOUT,
  ORDER_PRODUCT,
  INSERT_CHANGES,
  RETURN_CHANGES,
  ADD_TARGET_BALANCE,
  SUBSTRACT_TARGET_BALANCE,
} from './type';

const ACTIONS = {
  [USER_LOGIN]: nickname => `${nickname}(이)가 로그인했습니다.`,
  [INSERT_CHANGES]: (unitId, submitOnlyNumber) =>
    submitOnlyNumber
      ? `입력한 ${submitOnlyNumber}이 소유하고 있는 잔돈 중 가장 가까운 금액인 ${unitId}으로 변경되었습니다.`
      : `${unitId}을(를) 자판기에 투입했습니다.`,
  [RETURN_CHANGES]: changes =>
    `투입 금액: ${changes.reduce((acc, cur) => acc + cur, 0)}을(를) 잔돈으로 반환합니다.`,
  [ORDER_PRODUCT]: productsName => `상품: ${productsName} 주문을 성공했습니다.`,
};

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
  actionLogs: [{ id: 0, msg: '자판기가 켜졌습니다.' }],
};

export const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case USER_LOGIN: {
      const { actionLogs } = state;
      const { nickname, totalBalance, changesUnits, isManager } = payload;
      const actionMessage = ACTIONS[type](nickname);
      const newActionLogs = logAction(actionLogs, actionMessage);
      return {
        ...state,
        nickname,
        totalBalance,
        changesUnits,
        isManager,
        actionLogs: newActionLogs,
      };
    }
    case USER_LOGOUT:
      return { ...state };
    case INSERT_CHANGES: {
      const { changesUnits, prevInputChanges, totalBalance, actionLogs } = state;
      const { unitId, submitOnlyNumber } = payload;
      const [newChangesUnits, newPrevInputChanges, newTotalBalance] = updateprevInputChanges(
        changesUnits,
        prevInputChanges,
        totalBalance,
        unitId,
      );
      const actionMessage = ACTIONS[type](unitId, submitOnlyNumber);
      const newActionLogs = logAction(actionLogs, actionMessage);
      return {
        ...state,
        totalBalance: newTotalBalance,
        prevInputChanges: newPrevInputChanges,
        changesUnits: newChangesUnits,
        actionLogs: newActionLogs,
      };
    }
    case RETURN_CHANGES: {
      const { changesUnits, prevInputChanges, totalBalance, actionLogs } = state;
      const [newChangesUnits, newTotalBalance] = returnChanges(
        changesUnits,
        prevInputChanges,
        totalBalance,
      );
      const actionMessage = ACTIONS[type](prevInputChanges);
      const newActionLogs = logAction(actionLogs, actionMessage);
      return {
        ...state,
        totalBalance: newTotalBalance,
        changesUnits: newChangesUnits,
        prevInputChanges: [],
        actionLogs: newActionLogs,
      };
    }
    case ORDER_PRODUCT: {
      const { actionLogs } = state;
      const {
        newTotalBalance,
        newChangesUnits,
        targetProduct: { product_name: productName },
      } = payload;
      const actionMessage = ACTIONS[type](productName);
      const newActionLogs = logAction(actionLogs, actionMessage);
      return {
        ...state,
        totalBalance: newTotalBalance,
        changesUnits: newChangesUnits,
        prevInputChanges: [],
        actionLogs: newActionLogs,
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

const logAction = (prevLogs, actionMessage) => {
  const logsLength = prevLogs.length;
  const newLogs = [...prevLogs, { id: logsLength, msg: actionMessage }];
  return newLogs;
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
