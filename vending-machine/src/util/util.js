export function decreaseAmount(value, amount, setFunction, title) {
  if (amount === 0) return;
  const newObj = value.map((currency) => {
    if (title === currency.title) {
      return { ...currency, amount: amount - 1 };
    }
    return currency;
  });
  setFunction(newObj);
}

export function devideInputMoney(money) {
  const currencies = [10000, 5000, 1000, 500, 100, 50, 10];
  const inputMoneyArr = [];
  let i = 0;
  while (i < currencies.length) {
    const currency = currencies[i];
    if (money >= currency) {
      inputMoneyArr.push({
        title: currency,
        amount: parseInt(money / currency, 10),
      });
      money = money - currency * parseInt(money / currency, 10);
    }
    i++;
  }
  return inputMoneyArr;
}
