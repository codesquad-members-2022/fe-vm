import React from 'react';
import { Outlet } from 'react-router-dom';

import { ContextsProvider } from 'Components/Contexts';
import { NavigatorDiv, NavigatorlistDiv, HomeDiv } from './Home.styled';

const Home = () => {
	return (
		<HomeDiv>
			<NavigatorDiv>
				<NavigatorlistDiv>자판기</NavigatorlistDiv>
				<NavigatorlistDiv>지갑</NavigatorlistDiv>
			</NavigatorDiv>
			<ContextsProvider inner={<Outlet />} />
		</HomeDiv>
	);
};

export default Home;
