import { Outlet } from 'react-router-dom';
import { NavigatorDiv, HomeDiv } from './Home.styled';

const Home = () => {
	return (
		<HomeDiv>
			<NavigatorDiv>
				<div>자판기</div>
				<div>지갑</div>
			</NavigatorDiv>
			<Outlet />
		</HomeDiv>
	);
};

export default Home;
