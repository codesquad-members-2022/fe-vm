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
  if (isNaN(targetIndex) && !targetIndex) {
    error.isError = true;
    error.msg = '상품들 중에 찾는 id가 없어요. ';
  }
  const targetUnit = units[targetIndex];
  return [targetIndex, targetUnit, error];
}

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
  // 자판기 잔고 확인
  if (managerTotalBalance <= 0) {
    error.isError = true;
    error.msg = '잔고가 없어요';
    return [error];
  }
  // 주문한 상품 정보가져오기
  const [, targetProduct, targetError] = getTargetProductInfo(products, productId);
  if (targetError.isError) {
    error.isError = true;
    error.msg = targetError.msg;
    return [error];
  }

  // 주문한 상품의 수량 확인
  if (targetProduct.ea <= 0) {
    error.isError = true;
    error.msg = '선택한 상품의 수량이 충분하지 않아요.';
    return [error];
  }
  // 투입금액과 주문한 상품의 가격 비교
  if (inputMoney < targetProduct.price) {
    error.isError = true;
    error.msg = '선택한 금액보다 상품의 가격이 높아요.';
    return [error];
  }
  // 반환금액 =  투입한 금액 - 상품 금액
  // 반환금액으로 거스름돈 구하기
  const restMoney = inputMoney - targetProduct.price;
  const { changesUnits: restUnits } = getRestUnit(defaultChangeUnits, restMoney);
  const newManagerUnits = [...mangerUnits];
  const newUserUnits = [...userUnits];
  // 반환금액 거스름돈 단위마다 자판기 거스름돈에서 빼고, 유저 거스름돈에 추가
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
  // 투입금액을 유저 거스름돈에서 빼기
  inputChanges.forEach(id => {
    const targetIndex = newUserUnits.findIndex(unit => unit.id === id);
    const targetUnit = newUserUnits[targetIndex];
    newUserUnits[targetIndex] = { ...targetUnit, count: targetUnit.count - 1 };
  });
  // 유저 총 잔고와 자판기 총 잔고 최신화
  const newMangerTotalBalance = getTotalBalance(newManagerUnits);
  const newUserTotalBalance = getTotalBalance(newUserUnits);
  return [error, newManagerUnits, newMangerTotalBalance, newUserUnits, newUserTotalBalance];
};
