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

// TODO: 잔고관리하는 로직 추가

export const orderProduct = (changesUnits, prevInputChanges, totalBalance) => {
  const error = {
    isError: false,
    msg: '',
  };
  const newChangesUnits = [...changesUnits];
  let newTotalBalance = totalBalance;
  let totalInput = 0;
  for (const id of prevInputChanges) {
    const targetIndex = newChangesUnits.findIndex(unit => unit.id === id);
    const targetUnit = newChangesUnits[targetIndex];
    if (targetUnit.count <= 0) {
      error.isError = true;
      error.msg = '거스름돈이 없어요.';
      return [error];
    }
    totalInput += targetUnit.unit;
    newTotalBalance -= targetUnit.unit;
    newChangesUnits[targetIndex] = { ...targetUnit, count: targetUnit.count - 1 };
  }
  // eslint-disable-next-line consistent-return
  return [error, newChangesUnits, newTotalBalance, totalInput];
};
