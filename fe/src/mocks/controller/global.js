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
export function orderProduct(productId, products) {
  console.log('productId', productId);
}
