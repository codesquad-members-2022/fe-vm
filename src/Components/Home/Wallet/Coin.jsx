import PropTypes from 'prop-types';
import { useContext } from 'react';
import {
	CoinsContext,
	MoneyContext,
	MessagesDispatchContext,
} from 'Components/Contexts';

import { getPriceType } from 'Util/util';
import { MINUS } from 'Components/Common/constant';
import { CoinDiv, CoinCountDiv, CoinPriceDiv } from './Wallet.styled';

const Coin = ({ coin }) => {
	const { id, price, count } = coin;
	const { coins, setCoins } = useContext(CoinsContext);
	const { money, setMoney, setShowedMoney } = useContext(MoneyContext);
	const messagesDispatch = useContext(MessagesDispatchContext);

	const handleClickCount = () => {
		const totalMoney = money + price;
		const newCoins = [...coins];
		newCoins[id].count -= 1;

		setMoney(totalMoney);
		setShowedMoney(totalMoney);
		setCoins(newCoins);
		messagesDispatch({
			type: MINUS,
			contents: { [price]: 1 },
		});
	};

	return (
		<CoinDiv>
			<CoinPriceDiv>{getPriceType(price, true)}</CoinPriceDiv>
			<CoinCountDiv onClick={handleClickCount}>{count}개</CoinCountDiv>
		</CoinDiv>
	);
};

Coin.propTypes = {
	coin: PropTypes.objectOf(
		PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
	).isRequired,
};

export default Coin;
