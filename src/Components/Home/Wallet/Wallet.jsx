import { useContext } from 'react';

import { getPriceType } from 'Util/util';
import { CoinsContext, MessagesContext } from 'Components/Contexts';
import {
	WalletDiv,
	CoinsSumDiv,
	WalletMessagesDiv,
	WalletMessageDiv,
} from './Wallet.styled';
import Coin from './Coin';

const Wallet = () => {
	const { coins, coinsSum } = useContext(CoinsContext);
	const messages = useContext(MessagesContext);

	const coinsList = coins.map((coin) => <Coin key={coin.id} coin={coin} />);

	const WalletMessagesList = messages.map(({ id, time, totalPrice }) => {
		const priceSign = totalPrice > 0 ? '+' : '-';
		const totalPriceByType = getPriceType(Math.abs(totalPrice));
		return (
			totalPrice && (
				<WalletMessageDiv key={id}>
					{`[${time}] ${priceSign} ${totalPriceByType}`}
				</WalletMessageDiv>
			)
		);
	});

	return (
		<WalletDiv>
			<div>{coinsList}</div>
			<div>
				<CoinsSumDiv>{getPriceType(coinsSum, true)}</CoinsSumDiv>
				<WalletMessagesDiv>{WalletMessagesList}</WalletMessagesDiv>
			</div>
		</WalletDiv>
	);
};

export default Wallet;
