import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../UI/Button';
import Container from '../../UI/container';
import { _ } from '../../../constant/constant';

const Nav = (props) => {
  return (
    <StyledNav>
      {/* <Button width="100%">STOCK</Button> */}
      <div>
        <Link to="/">
          <Button width="100%">VENDING</Button>
        </Link>
      </div>
      <div>
        <Link to="wallet">
          <Button width="100%">WALLET</Button>
        </Link>
      </div>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixin.flexMixin(_, _, 'space-around')};
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 20px;
  margin-top: 20px;
`;
