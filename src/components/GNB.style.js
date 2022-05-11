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
  line-height: 48px;
  text-align: center;
  border: 1px solid #333;
  border-left: 0;
  &:first-child {
    border-left: 1px solid #333;
  }
`;

export { Container, NavItem };
