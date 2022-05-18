const moneyAmount = [10000, 5000, 1000, 500, 100, 50, 10];

export const sortByAmountWallet = (wallet) =>
  [...wallet].sort(
    ({ amount: amountA }, { amount: amountB }) => amountB - amountA
  );

export const calcWalletMoney = ({
  targetMoney,
  insertedMoney,
  inputMoney,
  walletMoney,
}) => {
  let myInputMoney = inputMoney;
  const sortedWallet = sortByAmountWallet(walletMoney);
  const newInsertedMoney = { ...insertedMoney };

  const newWallet = sortedWallet.map((moneyInfo, idx) => {
    const amount = moneyAmount[idx];
    let newCount = moneyInfo.count;
    for (let i = 0; i < moneyInfo.count; i++) {
      const nextInputMoney = myInputMoney + amount;
      const curDiff = Math.abs(targetMoney - myInputMoney);
      const nextDiff = Math.abs(targetMoney - nextInputMoney);
      if (nextDiff >= curDiff) {
        break;
      }
      newCount -= 1;
      newInsertedMoney[amount] += 1;
      myInputMoney = nextInputMoney;
    }
    return {
      ...moneyInfo,
      count: newCount,
    };
  });
  return {
    inputMoney: myInputMoney,
    walletMoney: newWallet,
    insertedMoney: newInsertedMoney,
  };
};

export const getCoinsByAmount = (amount) => {
  let changedAmount = amount;
  return moneyAmount.reduce((acc, nextAmount) => {
    const amountCount = Math.floor(changedAmount / nextAmount);
    acc[nextAmount] = amountCount > 0 ? amountCount : 0;
    if (amountCount > 0 && changedAmount > 0) {
      changedAmount -= amountCount * nextAmount;
    }
    return acc;
  }, {});
};

export const getSortedInsertedMoney = (insertedMoney) =>
  Object.entries(insertedMoney)
    .sort((a, b) => b[0] - a[0])
    .map(([key, val]) => [+key, +val]);

export const getRestCoins = (newInserted) => {
  const firstMinusCountIdx = newInserted.findIndex(([, count]) => count < 0);
  const restCoins = newInserted.slice(firstMinusCountIdx, newInserted.length);
  const sumRestCoins = restCoins.reduce((sum, next) => {
    const [amount, count] = next;
    return sum + amount * count;
  }, 0);
  const isSumOverZero = sumRestCoins >= 0;
  if (!isSumOverZero) {
    let tempSumRestCoins = sumRestCoins;
    for (let i = 1; i <= firstMinusCountIdx; i++) {
      const biggerStartIdx = firstMinusCountIdx - i;
      const [amount, count] = newInserted[biggerStartIdx];
      for (let j = 0; j < count; j++) {
        tempSumRestCoins += amount;
        if (tempSumRestCoins >= 0) {
          const slicedInserted = newInserted.slice(
            biggerStartIdx + 1,
            newInserted.length
          );
          return [[amount, count - j], ...slicedInserted];
        }
      }
    }
  }
  return restCoins;
};

export const getDiffInsertedMoney = (originInserted, minusInserted) => {
  const newMinusInserted = getSortedInsertedMoney(minusInserted);
  const newOriginInserted = getSortedInsertedMoney(originInserted);
  const newInserted = newOriginInserted.map(([amount, count], idx) => {
    const [, minusCount] = newMinusInserted[idx];
    return [amount, count - minusCount];
  });
  const restCoins = getRestCoins(newInserted);
  let tempSumRest = 0;
  const minusToZeroCoins = restCoins.map((coin) => {
    const [amount, count] = coin;
    const newCount = count < 0 ? 0 : count;
    if (count < 0) {
      tempSumRest += amount * count;
    }
    return [amount, newCount];
  });
  const pullingCoins = minusToZeroCoins.map((coin) => {
    const [amount, count] = coin;
    let newCount = count;
    while (newCount > 0 && tempSumRest < 0) {
      tempSumRest += amount;
      newCount -= 1;
    }
    return [amount, newCount];
  });

  const newReturnCoins = getCoinsByAmount(tempSumRest);

  const newRestCoins = pullingCoins.map((coin) => {
    const [amount, count] = coin;
    const returnCoinCount = newReturnCoins[amount];
    return [amount, count + returnCoinCount];
  });

  const newInsertedObj = Object.fromEntries(
    newRestCoins.sort((a, b) => a[0] - b[0])
  );

  const newRestCoinsObj = Object.fromEntries(
    newInserted.sort((a, b) => a[0] - b[0])
  );

  return {
    ...newRestCoinsObj,
    ...newInsertedObj,
  };
};
