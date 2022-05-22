import { INIT_WALLET, INSERT_MONEY, RETURN_MONEY, SPEND_MONEY } from 'context/Wallet/action';

const initWalletData = (state, payload) => {
  const { walletData } = payload;
  return { ...state, walletData, sumOfMoney: calcSumOfMoney(walletData) };
};

const calcSumOfMoney = walletData => {
  return walletData.reduce((acc, { value, count }) => acc + value * count, 0);
};

const setInsertMoneyData = (state, payload) => {
  const { walletData, sumOfMoney, sumOfInsertedMoney } = state;
  const { usedMoneyData, usedSumOfMoney } = payload;

  const newWalletData = walletData.map(data => {
    const { value, count } = data;
    return { ...data, count: count - (usedMoneyData[value] || 0) };
  });

  return {
    walletData: newWalletData,
    sumOfMoney: sumOfMoney - usedSumOfMoney,
    sumOfInsertedMoney: sumOfInsertedMoney + usedSumOfMoney,
  };
};

export const calcInsertedMoney = (walletData, insertedMoney) =>
  walletData.reduceRight(
    (acc, cur) => {
      const { usedMoneyData, usedSumOfMoney } = acc;
      const { value, count } = cur;

      if (insertedMoney < 10) {
        return acc;
      }

      let usedCount = parseInt(insertedMoney / value);
      usedCount = usedCount > count ? count : usedCount;
      insertedMoney -= usedCount * value;

      if (usedCount === 0) {
        return acc;
      }

      return {
        usedMoneyData: { ...usedMoneyData, [value]: usedCount },
        usedSumOfMoney: usedSumOfMoney + usedCount * value,
      };
    },
    { usedMoneyData: {}, usedSumOfMoney: 0 }
  );

const setReturnMoney = state => {
  const { walletData, sumOfMoney, sumOfInsertedMoney } = state;
  let insertedMoney = sumOfInsertedMoney;

  const newWalletData = walletData.reduceRight((acc, cur) => {
    const { value, count } = cur;
    const returnCount = parseInt(insertedMoney / value);
    insertedMoney -= value * returnCount;
    acc.push({ ...cur, count: count + returnCount });
    return acc;
  }, []);

  return {
    walletData: newWalletData.reverse(),
    sumOfMoney: sumOfMoney + sumOfInsertedMoney,
    sumOfInsertedMoney: 0,
  };
};

const setSpendMoney = (state, payload) => {
  const { sumOfInsertedMoney } = state;
  const { cost } = payload;
  return { ...state, sumOfInsertedMoney: sumOfInsertedMoney - cost };
};

const actionFunc = {
  [INIT_WALLET]: initWalletData,
  [INSERT_MONEY]: setInsertMoneyData,
  [RETURN_MONEY]: setReturnMoney,
  [SPEND_MONEY]: setSpendMoney,
};

const reducer = (state, { type, payload }) => actionFunc[type](state, payload) || state;

export default reducer;
