const exchangeMoney = num => {
  const unit = [10000, 5000, 1000, 500, 100, 50, 10];
  const exchangeLog = [];
  let cost = num;

  unit.forEach(item => {
    const 반환가능개수 = Math.floor(cost / item);
    if (!반환가능개수) return;

    exchangeLog.push({ unit: item, amount: 반환가능개수 });
    cost - item < item ? (cost -= item) : (cost -= item * 반환가능개수);
  });

  return exchangeLog;
};

export default exchangeMoney;
