import { useContext } from 'react';

import { MINUS, PLUS, UNIT } from 'Util/constant';
import {
	CoinsContext,
	MoneyContext,
	IsTakingOutContext,
	MessagesDispatchContext,
	ShowedMoneyContext,
} from 'Components/Contexts';
import { getPriceType } from 'Util/util';
import useDebounce from 'Util/hooks';
import calculateMoney from 'Util/controlMoney';
import { InsertMoneyDiv, InsertMoneyValue } from './InsertMoney.styled';
import ControllerBtns from './ControllerBtns';

const InsertMoney = () => {
	const AUTO_WITHDRAW_TIME = 5000;
	const ENTER = 'Enter';

	const { showedMoney, setShowedMoney } = useContext(ShowedMoneyContext);
	const { coins, coinsSum, setCoins } = useContext(CoinsContext);
	const { money, setMoneyStates } = useContext(MoneyContext);
	const { isTakingOut } = useContext(IsTakingOutContext);
	const messagesDispatch = useContext(MessagesDispatchContext);

	const changeMoney = (diffWithInsert) => {
		const calculatingType = diffWithInsert >= 0 ? MINUS : PLUS;
		const { calculatedMoney, changedCoins, newCoins } = calculateMoney(
			calculatingType,
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

	const checkInsertedMoney = (isZero) => {
		if (!money && !showedMoney) return; // already money is zero

		let diffWithInsert = showedMoney - money;
		if (isZero) diffWithInsert = -money;
		if (coinsSum < diffWithInsert) diffWithInsert = coinsSum;

		changeMoney(diffWithInsert);
	};

	const handleInput = ({ target: { value } }) => {
		const numberFilter = /^[0-9]+$|^$/;
		const valueNumber = Number(value.replaceAll(',', ''));
		if (numberFilter.test(valueNumber)) setShowedMoney(valueNumber);
	};

	const handleKeyUp = ({ key }) => {
		const isEnterKey = key === ENTER;
		if (isEnterKey) checkInsertedMoney();
	};

	useDebounce(() => checkInsertedMoney(true), AUTO_WITHDRAW_TIME);

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
				checkInsertedMoney={checkInsertedMoney}
			/>
		</>
	);
};

export default InsertMoney;
