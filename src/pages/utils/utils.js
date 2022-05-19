const makeTotalPrice = (moneyInfos) =>
  moneyInfos
    .map(({ type, num }) => type * num)
    .reduce((aMoney, bMoney) => aMoney + bMoney);

export default makeTotalPrice;
