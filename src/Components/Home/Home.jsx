import { useState, useEffect, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import coinsApi from 'Service/coinsApi';
import CoinsContext from './CoinsContext';
import { NavigatorDiv, HomeDiv } from './Home.styled';

const Home = () => {
	const [coins, setCoins] = useState([]);

	const fetchCoins = async () => {
		const coinsData = await coinsApi.getCoins();
		setCoins(coinsData);
	};

	const coinsInfo = useMemo(() => {
		const coinsSum = coins.reduce((pre, post) => {
			return pre + post.price * post.count;
		}, 0);
		return { coins, setCoins, coinsSum };
	}, [coins]);

	useEffect(() => {
		fetchCoins();
	}, []);

	return (
		<HomeDiv>
			<NavigatorDiv>
				<div>자판기</div>
				<div>지갑</div>
			</NavigatorDiv>
			<CoinsContext.Provider value={coinsInfo}>
				<Outlet />
			</CoinsContext.Provider>
		</HomeDiv>
	);
};

export default Home;
