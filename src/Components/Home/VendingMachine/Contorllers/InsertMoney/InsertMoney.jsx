import { useContext } from 'react';

import {
	CoinsContext,
	MoneyContext,
	ShowedMoneyContext,
	IsTakingOutContext,
	MessagesDispatchContext,
} from 'Components/Contexts';
import { getPriceType, useDebounce } from 'Util/util';
import { spendMoney, withdrawMoney } from 'Components/Common/controlMoney';
import {
	InsertMoneyDiv,
	InsertMoneyValue,
	WithdrawDiv,
} from './InsertMoney.styled';

const InsertMoney = () => {
	const unit = '원';
	const debounceInsertTime = 1000;
	const autoWithdrawTime = 5000;
	const { coins, coinsSum } = useContext(CoinsContext);
	const { showedMoney, setShowedMoney } = useContext(ShowedMoneyContext);
	const { money, setMoney } = useContext(MoneyContext);
	const { isTakingOut } = useContext(IsTakingOutContext);
	const messagesDispatch = useContext(MessagesDispatchContext);

	const handleInput = ({ target: { value } }) => {
		const regexNumber = /^[0-9]+$|^$/;
		const valueNumber = Number(value.replaceAll(',', ''));

		if (regexNumber.test(valueNumber)) setShowedMoney(valueNumber);
	};

	const handleClick = () => !isTakingOut && setShowedMoney(0);

	const checkShowedMoney = () => {
		const difference = showedMoney - money;
		const isMoneyInWallet = coinsSum >= difference;

		if (!isMoneyInWallet) {
			setShowedMoney(money);
			return;
		}

		const { calculatedMoney, changedCoins } =
			difference >= 0
				? spendMoney(coins, difference)
				: withdrawMoney(coins, difference);
		const totalMoney = money + calculatedMoney;

		setMoney(totalMoney);
		setShowedMoney(totalMoney);
		messagesDispatch({
			type: difference >= 0 ? 'MINUS' : 'PLUS',
			contents: changedCoins,
		});
	};

	useDebounce(checkShowedMoney, debounceInsertTime);
	useDebounce(handleClick, autoWithdrawTime);

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
