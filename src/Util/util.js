import { useCallback, useEffect } from 'react';

const getPriceType = (price, isUnit = false) => {
	const unit = isUnit ? '원' : '';
	return price.toLocaleString('ko-KR') + unit;
};

const useDebounce = (func, delay, deps) => {
	const callback = useCallback(func, [func, deps]);

	useEffect(() => {
		const timer = setTimeout(() => {
			callback();
		}, delay);

		return () => {
			clearTimeout(timer);
		};
	}, [callback, delay]);
};

const spendMoney = (coins, difference) => {
	const coinsInWallet = [...coins]; // 복사 방식 변경 필요!
	let totalCount = coinsInWallet.reduce((pre, post) => {
		return pre + post.count;
	}, 0);

	const getTargetMoneyId = (array, targetId = array.length - 1) => {
		if (targetId < 0) return targetId;

		const id = array[targetId].count
			? targetId
			: getTargetMoneyId(array, targetId - 1);
		return id;
	};

	let targetMoneyId = getTargetMoneyId(coinsInWallet);
	let remainedPrice = difference;

	while (remainedPrice > 0 && totalCount && targetMoneyId >= 0) {
		const targetMoney = coinsInWallet[targetMoneyId];
		const targetPrice = targetMoney.price;

		if (remainedPrice >= targetPrice) {
			remainedPrice -= targetPrice;
			targetMoney.count -= 1;
			totalCount -= 1;
		} else {
			targetMoneyId -= 1;
		}

		if (!targetMoney.count) {
			targetMoneyId = getTargetMoneyId(coinsInWallet, targetMoneyId - 1);
		}
	}

	const calculatedMoney = difference - remainedPrice;

	return { calculatedMoney, coinsInWallet };
};

const withdrawMoney = (coins, difference) => {
	const coinsInWallet = [...coins]; // 복사 방식 변경 필요!

	let targetMoneyId = coinsInWallet[coinsInWallet.length - 1].id;
	let remainedPrice = Math.abs(difference);

	while (remainedPrice > 0 && targetMoneyId >= 0) {
		const targetMoney = coinsInWallet[targetMoneyId];
		const targetPrice = targetMoney.price;

		if (remainedPrice >= targetPrice) {
			remainedPrice -= targetPrice;
			targetMoney.count += 1;
		} else {
			targetMoneyId -= 1;
		}
	}

	const calculatedMoney = difference + remainedPrice;

	return { calculatedMoney, coinsInWallet };
};

export { getPriceType, useDebounce, spendMoney, withdrawMoney };
