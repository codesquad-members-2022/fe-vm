import { UNIT } from 'Util/constant';

const getPriceType = (price, isUnit = false) => {
	const unit = isUnit ? UNIT : '';
	return price.toLocaleString('ko-KR') + unit;
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

export { getPriceType, getPresentTime };
