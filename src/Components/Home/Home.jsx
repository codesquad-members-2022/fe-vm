import { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import coinsApi from 'Service/coinsApi';
import CoinsContext from './CoinsContext';
import { NavigatorDiv, HomeDiv } from './Home.styled';

const Home = () => {
	const [coins, setCoins] = useState([]);
	const [money, setMoney] = useState(0);
	const [showedMoney, setShowedMoney] = useState(0);

	const fetchCoins = async () => {
		const coinsData = await coinsApi.getCoins();
		setCoins(coinsData);
	};

	const contextInfo = useMemo(() => {
		const coinsSum = coins.reduce((pre, post) => {
			return pre + post.price * post.count;
		}, 0);
		return {
			coins,
			setCoins,
			coinsSum,
			money,
			setMoney,
			showedMoney,
			setShowedMoney,
		};
	}, [coins, money, showedMoney]);

	useEffect(() => {
		fetchCoins();
	}, []);

	return (
		<HomeDiv>
			<NavigatorDiv>
				<div>자판기</div>
				<div>지갑</div>
			</NavigatorDiv>
			<CoinsContext.Provider value={contextInfo}>
				<Outlet />
			</CoinsContext.Provider>
		</HomeDiv>
	);
};

export default Home;
