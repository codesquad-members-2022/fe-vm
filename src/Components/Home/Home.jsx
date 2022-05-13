import React from 'react';
import { Outlet } from 'react-router-dom';

import { VENDINGMACHINE, WALLET } from 'Components/Common/constant';
import { ContextsProvider } from 'Components/Contexts';
import { NavigatorDiv, NavigatorlistDiv, HomeDiv } from './Home.styled';

const Home = () => {
	return (
		<HomeDiv>
			<NavigatorDiv>
				<NavigatorlistDiv>{VENDINGMACHINE}</NavigatorlistDiv>
				<NavigatorlistDiv>{WALLET}</NavigatorlistDiv>
			</NavigatorDiv>
			<ContextsProvider inner={<Outlet />} />
		</HomeDiv>
	);
};

export default Home;
