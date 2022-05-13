import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import useNavLinks from 'hooks/useNavLinks';

const links = [
  {
    path: '/vendingMachine',
    title: '자판기',
  },
  {
    path: '/wallet',
    title: '지갑',
  },
];

const Layout = () => {
  const navLinks = useNavLinks(links);
  return (
    <>
      <Header>
        <HeaderTitle>코쿼 자판기</HeaderTitle>
        <nav>{navLinks}</nav>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 10rem;
  padding: 10px;
  background-color: ${COLORS.WHITE};
`;

const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 5px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export default Layout;
