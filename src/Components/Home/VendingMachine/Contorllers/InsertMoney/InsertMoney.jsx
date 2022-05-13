import { useContext } from 'react';

import {
	insertMoneyTime,
	autoWithdrawTime,
	emptyMoney,
	MINUS,
	PLUS,
	UNIT,
} from 'Components/Common/constant';
import {
	CoinsContext,
	MoneyContext,
	ShowedMoneyContext,
	IsTakingOutContext,
	MessagesDispatchContext,
} from 'Components/Contexts';
import { getPriceType } from 'Util/util';
import useDebounce from 'Util/hooks';
import { spendMoney, withdrawMoney } from 'Components/Common/controlMoney';
import {
	InsertMoneyDiv,
	InsertMoneyValue,
	WithdrawDiv,
} from './InsertMoney.styled';

const InsertMoney = () => {
	const { coins, coinsSum } = useContext(CoinsContext);
	const { showedMoney, setShowedMoney } = useContext(ShowedMoneyContext);
	const { money, setMoney } = useContext(MoneyContext);
	const { isTakingOut } = useContext(IsTakingOutContext);
	const messagesDispatch = useContext(MessagesDispatchContext);

	const handleInput = ({ target: { value } }) => {
		const numberFilter = /^[0-9]+$|^$/;
		const valueNumber = Number(value.replaceAll(',', ''));
		if (numberFilter.test(valueNumber)) setShowedMoney(valueNumber);
	};

	const handleClick = () => !isTakingOut && setShowedMoney(emptyMoney);

	const getCalculatingOptions = (difference) => {
		const isSpending = difference >= 0;
		const calculatingOptions = {
			calculateMoney: isSpending ? spendMoney : withdrawMoney,
			calculatingType: isSpending ? MINUS : PLUS,
		};
		return calculatingOptions;
	};

	const checkShowedMoney = () => {
		const difference = showedMoney - money;
		const isMoneyInWallet = coinsSum >= difference;
		const { calculateMoney, calculatingType } =
			getCalculatingOptions(difference);

		if (!isMoneyInWallet) {
			setShowedMoney(money);
			return;
		}

		const { calculatedMoney, changedCoins } = calculateMoney(coins, difference);
		const totalMoney = money + calculatedMoney;

		setMoney(totalMoney);
		setShowedMoney(totalMoney);
		messagesDispatch({
			type: calculatingType,
			contents: changedCoins,
		});
	};

	useDebounce(checkShowedMoney, insertMoneyTime);
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
				{UNIT}
			</InsertMoneyDiv>
			<WithdrawDiv onClick={handleClick} isTakingOut={isTakingOut}>
				반납
			</WithdrawDiv>
		</>
	);
};

export default InsertMoney;
