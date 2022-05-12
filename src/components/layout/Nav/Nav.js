import React from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button';
import { _ } from '../../../constant/constant';

const Nav = (props) => {
  return (
    <StyledNav>
      <Button width="100%">STOCK</Button>
      <Button width="100%">VENDING</Button>
      <Button width="100%">WALLET</Button>
      {/* 라우팅 추가할 부분 */}
    </StyledNav>
  );
};

export default Nav;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixin.flexMixin(_, _, 'space-between')};
  background-color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 25px;
`;
