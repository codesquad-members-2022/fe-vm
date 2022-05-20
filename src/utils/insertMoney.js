const insertWalletMoney = (walletData, num, totalMoney) => {
  const insertLog = [];

  // 자동보정
  let money = Math.floor(num / 10) * 10;
  if (totalMoney < money) {
    return walletData;
  }

  walletData.forEach(item => {
    // 천원 투입시 만원이 사용되지않도록, 해당하는 금액의 수량이 없으면 리턴
    if (!Math.floor(money / item.unit) || !item.amount) return;

    // 15000원을 투입했는데 5000원권이 2개밖에 없다면?
    if (item.unit * item.amount < money) {
      const 투입가능금액 = item.unit * item.amount;
      const 투입가능횟수 = Math.floor(투입가능금액 / item.unit);
      insertLog.push({ ...item, amount: 투입가능횟수 });
      money -= 투입가능금액;
      return;
    }

    const 투입가능횟수 = Math.floor(money / item.unit);
    insertLog.push({ ...item, amount: 투입가능횟수 });
    money - item.unit < item.unit && money <= 0
      ? (money -= item.unit)
      : (money -= item.unit * 투입가능횟수);
  });

  return insertLog;
};

export default insertWalletMoney;
