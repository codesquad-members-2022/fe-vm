import { useContext } from 'react';

import {
	autoWithdrawTime,
	MINUS,
	PLUS,
	UNIT,
	ENTER,
} from 'Components/Common/constant';
import {
	CoinsContext,
	MoneyContext,
	IsTakingOutContext,
	MessagesDispatchContext,
} from 'Components/Contexts';
import { getPriceType } from 'Util/util';
import useDebounce from 'Util/hooks';
import { spendMoney, withdrawMoney } from 'Components/Common/controlMoney';
import { InsertMoneyDiv, InsertMoneyValue } from './InsertMoney.styled';
import ControllerBtns from './ControllerBtns';

const InsertMoney = () => {
	const { coins, coinsSum, setCoins } = useContext(CoinsContext);
	const { money, setMoneyStates, showedMoney, setShowedMoney } =
		useContext(MoneyContext);
	const { isTakingOut } = useContext(IsTakingOutContext);
	const messagesDispatch = useContext(MessagesDispatchContext);

	const getCalculatingOptions = (diffWithInsert) => {
		const isSpending = diffWithInsert >= 0;
		const calculatingOptions = {
			calculateMoney: isSpending ? spendMoney : withdrawMoney,
			calculatingType: isSpending ? MINUS : PLUS,
		};
		return calculatingOptions;
	};

	const calculateAndReportMoney = (isZero) => {
		if (isZero && !showedMoney) return;

		const diffWithInsert = isZero ? -money : showedMoney - money;
		const isMoneyInWallet = coinsSum >= diffWithInsert; // is inserted money much larger than wallet
		const { calculateMoney, calculatingType } =
			getCalculatingOptions(diffWithInsert);

		if (!isMoneyInWallet) {
			setShowedMoney(money);
			return;
		}

		const { calculatedMoney, changedCoins, newCoins } = calculateMoney(
			coins,
			diffWithInsert
		);
		const totalMoney = money + calculatedMoney;

		setMoneyStates(totalMoney);
		setCoins(newCoins);
		messagesDispatch({
			type: calculatingType,
			contents: changedCoins,
		});
	};

	const handleInput = ({ target: { value } }) => {
		const numberFilter = /^[0-9]+$|^$/;
		const valueNumber = Number(value.replaceAll(',', ''));
		if (numberFilter.test(valueNumber)) setShowedMoney(valueNumber);
	};

	const handleKeyUp = ({ key }) => {
		const isEnterKey = key === ENTER;
		if (isEnterKey) calculateAndReportMoney();
	};

	useDebounce(() => calculateAndReportMoney(true), autoWithdrawTime);

	return (
		<>
			<InsertMoneyDiv isTakingOut={isTakingOut}>
				<InsertMoneyValue
					type="text"
					maxLength="11"
					onInput={handleInput}
					onPaste={handleInput}
					onKeyUp={handleKeyUp}
					value={getPriceType(showedMoney)}
					disabled={isTakingOut}
					isTakingOut={isTakingOut}
				/>
				{UNIT}
			</InsertMoneyDiv>
			<ControllerBtns
				isTakingOut={isTakingOut}
				calculateAndReportMoney={calculateAndReportMoney}
			/>
		</>
	);
};

export default InsertMoney;
