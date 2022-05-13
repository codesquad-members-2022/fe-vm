import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import COLORS from 'constants/colors';

const useNavLinks = (links) => {
  const location = useLocation();

  const pathname =
    location.pathname === '/' ? '/vendingMachine' : location.pathname;
  const isSelectedPath = (path) => path === pathname;

  const navLinks = (
    <NavLinks>
      {links.map(({ path, title }) => (
        <NavLink key={uuidv4()}>
          <Link to={path}>
            <Button isActive={isSelectedPath(path)}>{title}</Button>
          </Link>
        </NavLink>
      ))}
    </NavLinks>
  );
  return navLinks;
};

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  width: 20rem;
  gap: 10px;
`;

const NavLink = styled.li`
  font-size: 20px;
  width: 50%;
`;

const Button = styled.button`
  font-size: 1em;
  cursor: pointer;
  width: 100%;
  background-color: ${({ isActive }) =>
    isActive ? COLORS.BLUE : COLORS.SKY_BLUE};
  border-radius: 5px;
  color: ${COLORS.WHITE};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${COLORS.BLUE};
  }
`;

export default useNavLinks;
