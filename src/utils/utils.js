const addComma = (number) => {
  return Number(number).toLocaleString("en");
};

const getTotalAmount = (wallet) => {
  const totalAmount = wallet.reduce(function (acc, cur) {
    return acc + cur.price * cur.quantity;
  }, 0);

  return totalAmount;
};

export { addComma, getTotalAmount };
