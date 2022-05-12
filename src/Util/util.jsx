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

const getPresentTime = () => {
	const now = new Date();
	let hours = now.getHours();
	let minutes = now.getMinutes();
	let seconds = now.getSeconds();
	hours = hours < 10 ? `0${hours}` : hours;
	minutes = minutes < 10 ? `0${minutes}` : minutes;
	seconds = seconds < 10 ? `0${seconds}` : seconds;
	return `${hours}:${minutes}:${seconds}`;
};

export { getPriceType, useDebounce, getPresentTime };
