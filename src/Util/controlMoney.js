const getTargetMoneyId = (array, targetId = array.length - 1) => {
	if (targetId < 0) return targetId;

	const id = array[targetId].count
		? targetId
		: getTargetMoneyId(array, targetId - 1);

	return id;
};

const reportChangedCoins = (coins, targetPrice) => {
	const changedCoins = coins;
	changedCoins[targetPrice] = changedCoins[targetPrice]
		? changedCoins[targetPrice] + 1
		: 1;
};

const getDefaultInfo = {
	MINUS: (newCoins, difference) => {
		return {
			targetMoneyId: getTargetMoneyId(newCoins),
			remainedPrice: difference,
			processCount: (count) => count - 1,
			getCalculatedMoney: (remainedPrice) => difference - remainedPrice,
		};
	},
	PLUS: (newCoins, difference) => {
		return {
			targetMoneyId: newCoins[newCoins.length - 1].id,
			remainedPrice: Math.abs(difference),
			processCount: (count) => count + 1,
			getCalculatedMoney: (remainedPrice) => difference + remainedPrice,
		};
	},
};

const calculateMoney = (type, coins, difference) => {
	const newCoins = [...coins];
	const changedCoins = {}; // like {10: -3, 1000: -2, 10000: -23}
	const defaultInfo = getDefaultInfo[type](newCoins, difference);
	const { processCount, getCalculatedMoney } = defaultInfo;

	let { targetMoneyId, remainedPrice } = defaultInfo;

	while (targetMoneyId >= 0) {
		const targetMoney = newCoins[targetMoneyId]; // like { id: 0, price: 10, count: 103 }
		const targetPrice = targetMoney.price;

		if (remainedPrice >= targetPrice) {
			remainedPrice -= targetPrice;
			targetMoney.count = processCount(targetMoney.count);
			targetMoneyId = targetMoney.count ? targetMoneyId : targetMoneyId - 1;
			reportChangedCoins(changedCoins, targetPrice);
		} else {
			targetMoneyId -= 1;
		}
	}

	const calculatedMoney = getCalculatedMoney(remainedPrice);

	return { calculatedMoney, changedCoins, newCoins };
};

export default calculateMoney;
