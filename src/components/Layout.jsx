import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

import COLORS from 'constants/colors';

const Layout = () => (
  <>
    <Header>
      <HeaderTitle>코쿼 자판기</HeaderTitle>
      <nav>
        <NavItems>
          <NavItem>
            <Link to='/vendingMachine'>
              <Button>자판기</Button>
            </Link>
          </NavItem>
          <NavItem>
            <Link to='/wallet'>
              <Button>지갑</Button>
            </Link>
          </NavItem>
        </NavItems>
      </nav>
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

const NavItems = styled.ul`
  display: flex;
  justify-content: center;
  width: 20rem;
`;

const NavItem = styled.li`
  margin: 0px 5px;
  font-size: 20px;
  width: 50%;
`;

const Button = styled.button`
  font-size: 1em;
  cursor: pointer;
  width: 100%;
  background-color: ${COLORS.SKY_BLUE};
  border-radius: 5px;
  color: ${COLORS.WHITE};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${COLORS.BLUE};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export default Layout;