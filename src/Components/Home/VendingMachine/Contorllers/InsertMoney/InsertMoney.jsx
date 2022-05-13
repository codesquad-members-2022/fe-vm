import { useContext } from 'react';

import {
	autoWithdrawTime,
	MINUS,
	PLUS,
	UNIT,
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
import Btns from './Btns';

const InsertMoney = () => {
	const { coins, coinsSum } = useContext(CoinsContext);
	const { money, setMoney, showedMoney, setShowedMoney } =
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

	const calculateAndReportMoney = (isEmpty) => {
		const diffWithInsert = isEmpty ? -money : showedMoney - money;
		const isMoneyInWallet = coinsSum >= diffWithInsert; // is inserted money much larger than wallet
		const { calculateMoney, calculatingType } =
			getCalculatingOptions(diffWithInsert);

		if (!isMoneyInWallet) {
			setShowedMoney(money);
			return;
		}

		const { calculatedMoney, changedCoins } = calculateMoney(
			coins,
			diffWithInsert
		);
		const totalMoney = money + calculatedMoney;

		setMoney(totalMoney);
		setShowedMoney(totalMoney);
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

	const withdrawAll = (isEmpty) => {
		if (isTakingOut || !showedMoney) return;
		calculateAndReportMoney(isEmpty);
	};

	const handleKeyUp = ({ key }) => {
		const isEnterKey = key === 'Enter';
		if (isEnterKey) calculateAndReportMoney();
	};

	useDebounce(withdrawAll, autoWithdrawTime);

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
			<Btns isTakingOut={isTakingOut} withdrawAll={withdrawAll} />
		</>
	);
};

export default InsertMoney;
