import { useContext } from 'react';

import CoinsContext from 'Components/Home/CoinsContext';
import {
	getPriceType,
	useDebounce,
	spendMoney,
	withdrawMoney,
} from 'Util/util';
import {
	InsertMoneyDiv,
	InsertMoneyValue,
	WithdrawDiv,
} from './InsertMoney.styled';

const InsertMoney = () => {
	const unit = '원';
	const debounceTime = 2000;
	const { coins, coinsSum, money, setMoney, showedMoney, setShowedMoney } =
		useContext(CoinsContext);

	const handleInput = ({ target: { value } }) => {
		const rNumber = /^[0-9]+$|^$/;
		const valueNumber = Number(value.replaceAll(',', ''));

		if (rNumber.test(valueNumber)) setShowedMoney(valueNumber);
	};

	const handleClick = () => {
		setShowedMoney(0);
	};

	const checkShowedMoney = () => {
		const difference = showedMoney - money;
		const isMoneyInWallet = coinsSum >= difference;

		if (isMoneyInWallet) {
			const { calculatedMoney } =
				difference >= 0
					? spendMoney(coins, difference)
					: withdrawMoney(coins, difference);
			const totalMoney = money + calculatedMoney;

			setMoney(totalMoney);
			setShowedMoney(totalMoney);
		} else {
			setShowedMoney(money);
		}
	};

	useDebounce(checkShowedMoney, debounceTime);

	return (
		<>
			<InsertMoneyDiv>
				<InsertMoneyValue
					type="text"
					maxLength="11"
					onInput={handleInput}
					onPaste={handleInput}
					value={getPriceType(showedMoney)}
				/>
				{unit}
			</InsertMoneyDiv>
			<WithdrawDiv onClick={handleClick}>반납</WithdrawDiv>
		</>
	);
};

export default InsertMoney;
