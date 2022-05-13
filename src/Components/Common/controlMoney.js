const spendMoney = (coins, difference) => {
	const coinsInWallet = [...coins]; // 복사 방식 변경 필요!
	const changedCoins = {};

	const getTargetMoneyId = (array, targetId = array.length - 1) => {
		if (targetId < 0) return targetId;

		const id = array[targetId].count
			? targetId
			: getTargetMoneyId(array, targetId - 1);
		return id;
	};

	let totalCount = coinsInWallet.reduce((pre, post) => pre + post.count, 0);
	let targetMoneyId = getTargetMoneyId(coinsInWallet);
	let remainedPrice = difference;

	while (remainedPrice > 0 && totalCount && targetMoneyId >= 0) {
		const targetMoney = coinsInWallet[targetMoneyId]; // like { id: 0, price: 10, count: 103 }
		const targetPrice = targetMoney.price;

		if (remainedPrice >= targetPrice) {
			remainedPrice -= targetPrice;
			targetMoney.count -= 1;
			changedCoins[targetPrice] = changedCoins[targetPrice]
				? changedCoins[targetPrice] + 1
				: 1;
			totalCount -= 1;
		} else {
			targetMoneyId -= 1;
		}

		if (!targetMoney.count) {
			targetMoneyId = getTargetMoneyId(coinsInWallet, targetMoneyId - 1);
		}
	}

	const calculatedMoney = difference - remainedPrice;

	// changedCoins is like {10: -3, 1000: -2, 10000: -23}
	return { calculatedMoney, changedCoins };
};

const withdrawMoney = (coins, difference) => {
	const coinsInWallet = [...coins]; // 복사 방식 변경 필요!
	const changedCoins = {};

	let targetMoneyId = coinsInWallet[coinsInWallet.length - 1].id;
	let remainedPrice = Math.abs(difference);

	while (remainedPrice > 0 && targetMoneyId >= 0) {
		const targetMoney = coinsInWallet[targetMoneyId];
		const targetPrice = targetMoney.price;

		if (remainedPrice >= targetPrice) {
			remainedPrice -= targetPrice;
			targetMoney.count += 1;
			changedCoins[targetPrice] = changedCoins[targetPrice]
				? changedCoins[targetPrice] + 1
				: 1;
		} else {
			targetMoneyId -= 1;
		}
	}

	const calculatedMoney = difference + remainedPrice;

	// changedCoins is likes {10: 3, 100: 3, 500: 1, 1000: 3, 5000: 1, 10000: 20}
	return { calculatedMoney, changedCoins };
};

export { spendMoney, withdrawMoney };
