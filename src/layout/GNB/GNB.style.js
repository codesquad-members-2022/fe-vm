import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const NavItem = styled(Link)`
  min-width: 100px;
  padding: 0 15px;
  font-size: 22px;
  line-height: 48px;
  text-align: center;
  border-left: 0;
  border-bottom: ${({ isSelected }) => (isSelected ? '2px solid #333' : 0)};
`;

export { Container, NavItem };
