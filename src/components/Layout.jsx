import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import NavLinks from 'components/NavLinks';
import COLORS from 'constants/colors';

const Layout = () => (
  <>
    <Header>
      <HeaderTitle>코쿼 자판기</HeaderTitle>
      <NavLinks />
    </Header>
    <Content>
      <Outlet />
    </Content>
  </>
);

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
