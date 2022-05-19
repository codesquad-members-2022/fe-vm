import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

import { ContextsProvider } from 'Components/Contexts';
import { NavigatorDiv, NavigatorListDiv, HomeDiv } from './Home.styled';

const Home = () => {
	const VENDINGMACHINE = '자판기';
	const WALLET = '지갑';

	const { pathname } = useLocation();
	const navigatorInfo = [
		{ id: 0, to: '/', name: VENDINGMACHINE },
		{ id: 1, to: '/wallet', name: WALLET },
	];
	const navigator = navigatorInfo.map((info) => {
		const { id, to, name } = info;
		return (
			<Link key={id} to={to}>
				<NavigatorListDiv to={to} pathname={pathname}>
					{name}
				</NavigatorListDiv>
			</Link>
		);
	});

	return (
		<HomeDiv>
			<NavigatorDiv>{navigator}</NavigatorDiv>
			<ContextsProvider inner={<Outlet />} />
		</HomeDiv>
	);
};

export default Home;
