const addCommasToNumber = number => number.toLocaleString('en');

const getSumOfUnitCloseToPayment = (sumOfUnit, unit, quantity, payment) => {
  const newSumOfUnit = sumOfUnit;
  let usedAmount = 1;

  while (usedAmount <= quantity) {
    newSumOfUnit.total += unit;
    newSumOfUnit.unitsToBeUsed = [...newSumOfUnit.unitsToBeUsed, unit];
    if (newSumOfUnit.total + unit > payment) break;
    usedAmount += 1;
  }

  return newSumOfUnit;
};

const calcPaymentToBeUsed = (walletState, payment) => {
  const paymentToBeUsed = walletState.reduceRight(
    (sumOfUnit, { unit, quantity }) => {
      if (sumOfUnit.total + unit > payment || !quantity) return sumOfUnit;

      const newSumOfUnit = getSumOfUnitCloseToPayment(sumOfUnit, unit, quantity, payment);

      return newSumOfUnit;
    },
    { total: 0, unitsToBeUsed: [] }
  );

  return paymentToBeUsed;
};

export { addCommasToNumber, calcPaymentToBeUsed };
