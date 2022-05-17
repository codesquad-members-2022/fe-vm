import { defaultChangeUnits, getTotalBalance } from 'mocks/user';
import { getTargetProductInfo } from './product';

export function getRestUnit(units, balance) {
  const { newUnits } = units
    .sort((prev, cur) => cur.unit - prev.unit)
    .reduce(
      // eslint-disable-next-line no-shadow
      ({ rest, newUnits }, cur) => {
        const targetCount = Math.floor(rest / cur.unit);
        const newRest = rest % cur.unit;
        return { rest: newRest, newUnits: [{ ...cur, count: targetCount }, ...newUnits] };
      },
      { rest: balance, newUnits: [] },
    );
  return { changesUnits: newUnits, totalBalance: balance };
}

export function addTargetUnit(units, balance, id) {
  const [targetUnitIndex, targetUnit, error] = getTargetUnitInfo(units, id);
  if (error.isError) {
    return [units, balance, error];
  }
  const newUnits = [...units];
  newUnits[targetUnitIndex] = { ...targetUnit, count: targetUnit.count + 1 };
  const newBalance = balance + targetUnit.unit;
  return [newUnits, newBalance, error];
}

export function subStractTargetUnit(units, balance, id) {
  if (balance <= 0) {
    const error = {
      isError: true,
      msg: '잔고가 0원 보다 작아요.',
    };
    return [units, balance, error];
  }
  const [targetUnitIndex, targetUnit, error] = getTargetUnitInfo(units, id);
  if (error.isError) {
    return [units, balance, error];
  }
  if (targetUnit.count <= 0) {
    error.isError = true;
    error.msg = '뺄 수 있는 잔고가 없어요.';
    return [units, balance, error];
  }
  if (targetUnit.unit > balance) {
    error.isError = true;
    error.msg = '잔고가 충분하지 않아 선택된 단위를 뺄 수 없어요.';
    return [units, balance, error];
  }
  const newUnits = [...units];
  newUnits[targetUnitIndex] = { ...targetUnit, count: targetUnit.count - 1 };
  const newBalance = balance - targetUnit.unit;
  return [newUnits, newBalance, error];
}

export function getTargetUnitInfo(units, id) {
  const error = {
    isError: false,
    msg: '',
  };
  const targetIndex = units.findIndex(unit => unit.id === id);
  if (!targetIndex) {
    error.isError = true;
    error.msg = '상품들 중에 찾는 id가 없어요. ';
  }
  const targetUnit = units[targetIndex];
  return [targetIndex, targetUnit, error];
}

// 상품 id로 선택한 상품을 찾기 !!!
// 선택한 상품의 수량 확인: 0 이하면 에러 !!!
// 투입한 금액에서 상품 가격 빼기 !!!
// 남은 금액을 매니저 잔고 돌면서 내림차순으로 반환 !!
// 다돌았는데 남은 금액이 있으면 거스름돈이 없다는 에러 반환 !!
// 거스름돈 배열을 유저의 거스름돈 배열에 그대로 대입 !!
// 유저가 투입한 동전만큼 유저 지갑에서 제거 !!
// 유저 total업데이트 및 매니저 total업데이트 !!

export const orderProduct = (
  userBalanceObj,
  mangerBalanceObj,
  inputMoney,
  inputChanges,
  products,
  productId,
) => {
  const { changesUnits: userUnits } = userBalanceObj;
  const { changesUnits: mangerUnits, totalBalance: managerTotalBalance } = mangerBalanceObj;
  const error = {
    isError: false,
    msg: '',
  };
  if (managerTotalBalance <= 0) {
    error.isError = true;
    error.msg = '잔고가 없어요';
    return [error];
  }
  const [, targetProduct, targetError] = getTargetProductInfo(products, productId);
  if (targetError.isError) {
    error.isError = true;
    error.msg = targetError.msg;
    return [error];
  }
  if (targetProduct.ea <= 0) {
    error.isError = true;
    error.msg = '선택한 상품의 수량이 충분하지 않아요.';
    return [error];
  }
  if (inputMoney < targetProduct.price) {
    error.isError = true;
    error.msg = '선택한 금액보다 상품의 가격이 높아요.';
    return [error];
  }
  const restMoney = inputMoney - targetProduct.price;
  const { changesUnits: restUnits } = getRestUnit(defaultChangeUnits, restMoney);
  const newManagerUnits = [...mangerUnits];
  const newUserUnits = [...userUnits];
  for (let i = 0; i < newManagerUnits.length; i += 1) {
    const restUnit = restUnits[i];
    const mangerUnit = newManagerUnits[i];
    const userUnit = newUserUnits[i];
    if (restUnit.count <= 0) {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (restUnit.count > mangerUnit.count) {
      error.isError = true;
      error.msg = '거스름돈이 없어요.';
      return [error];
    }
    newManagerUnits[i].count = mangerUnit.count - restUnit.count;
    newUserUnits[i].count = userUnit.count + restUnit.count;
  }
  inputChanges.forEach(id => {
    const targetIndex = newUserUnits.findIndex(unit => unit.id === id);
    const targetUnit = newUserUnits[targetIndex];
    newUserUnits[targetIndex] = { ...targetUnit, count: targetUnit.count - 1 };
  });
  const newMangerTotalBalance = getTotalBalance(newManagerUnits);
  const newUserTotalBalance = getTotalBalance(newUserUnits);
  return [error, newManagerUnits, newMangerTotalBalance, newUserUnits, newUserTotalBalance];
};
