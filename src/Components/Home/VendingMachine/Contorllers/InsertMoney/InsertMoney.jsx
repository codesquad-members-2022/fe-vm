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
	const debounceTime = 1000;
	const {
		coins,
		coinsSum,
		money,
		showedMoney,
		isTakingOut,
		setMoney,
		setShowedMoney,
	} = useContext(CoinsContext);

	const handleInput = ({ target: { value } }) => {
		const rNumber = /^[0-9]+$|^$/;
		const valueNumber = Number(value.replaceAll(',', ''));

		if (rNumber.test(valueNumber)) setShowedMoney(valueNumber);
	};

	const handleClick = () => !isTakingOut && setShowedMoney(0);

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
			<InsertMoneyDiv isTakingOut={isTakingOut}>
				<InsertMoneyValue
					type="text"
					maxLength="11"
					onInput={handleInput}
					onPaste={handleInput}
					value={getPriceType(showedMoney)}
					disabled={isTakingOut}
					isTakingOut={isTakingOut}
				/>
				{unit}
			</InsertMoneyDiv>
			<WithdrawDiv onClick={handleClick} isTakingOut={isTakingOut}>
				반납
			</WithdrawDiv>
		</>
	);
};

export default InsertMoney;
