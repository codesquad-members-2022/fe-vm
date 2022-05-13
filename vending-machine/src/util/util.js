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
