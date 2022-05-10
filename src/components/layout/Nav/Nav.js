import React from 'react';
import styled from 'styled-components';

const Nav = (props) => {
  return (
    <StyledNav>
      <NavButton>STOCK</NavButton>
      <NavButton>VENDING</NavButton>
      <NavButton>BALANCE</NavButton>
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  ${({ theme }) =>
    theme.mixin.flexMixin(undefined, undefined, 'space-between')};
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 25px;
`;

const NavButton = styled.button`
  width: 100%;
  height: 60px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.navy};
  }
`;
