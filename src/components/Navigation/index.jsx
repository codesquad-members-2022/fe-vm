import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navigation = () => {
  const navInfo = [
    { id: 'MAIN', path: '/', title: ' 🧃 자판기' },
    { id: 'WALLET', path: 'wallet', title: ' 지갑 💵' },
  ];

  const NavLinkComponents = navInfo.map(info => {
    return (
      <NavLink
        key={info.id}
        to={info.path}
        className={({ isActive }) => (isActive ? 'activated' : 'deactivated')}
      >
        {info.title}
      </NavLink>
    );
  });

  return <Nav>{NavLinkComponents}</Nav>;
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px 0px 40px 0;

  a {
    width: 136px;
    margin: 0 8px;
    padding: 12px 0;
    ${({ theme }) => theme.fontStyles.xLargeBold};
  }

  .deactivated {
    border-bottom: 3px solid ${({ theme }) => theme.colors.gray3};

    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
      border-bottom: none;
    }
  }

  .activated {
    border-bottom: 3px solid ${({ theme }) => theme.colors.blue};
  }
`;

export default Navigation;
