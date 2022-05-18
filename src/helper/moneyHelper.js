const INITIAL_MONEY = 0;

const moneyDataTemplate = [
  { money: 10, count: 0 },
  { money: 50, count: 0 },
  { money: 100, count: 0 },
  { money: 500, count: 0 },
  { money: 1000, count: 0 },
  { money: 5000, count: 0 },
  { money: 10000, count: 0 },
];

const moneyHelper = {
  computeTotalMoney(insertedMoney) {
    return insertedMoney.reduce(
      (prev, { money, count = 1 }) => prev + money * count,
      INITIAL_MONEY
    );
  },
  getTotalInsertedMoney(insertedMoney) {
    return moneyDataTemplate.map((currentData) => {
      return insertedMoney
        .filter(({ money }) => money === currentData.money)
        .reduce((prev, { count }) => {
          return { ...prev, count: prev.count + count };
        }, currentData);
    });
  },
};

export default moneyHelper;
