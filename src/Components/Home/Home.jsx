import { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import coinsApi from 'Service/coinsApi';
import CoinsContext from './CoinsContext';
import { NavigatorDiv, NavigatorlistDiv, HomeDiv } from './Home.styled';

const Home = () => {
	const [coins, setCoins] = useState([]);
	const [money, setMoney] = useState(0);
	const [showedMoney, setShowedMoney] = useState(0);
	const [isTakingOut, setIsTakingOut] = useState(false);

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
			isTakingOut,
			setIsTakingOut,
		};
	}, [coins, money, showedMoney, isTakingOut]);

	useEffect(() => {
		fetchCoins();
	}, []);

	return (
		<HomeDiv>
			<NavigatorDiv>
				<NavigatorlistDiv>자판기</NavigatorlistDiv>
				<NavigatorlistDiv>지갑</NavigatorlistDiv>
			</NavigatorDiv>
			<CoinsContext.Provider value={contextInfo}>
				<Outlet />
			</CoinsContext.Provider>
		</HomeDiv>
	);
};

export default Home;
