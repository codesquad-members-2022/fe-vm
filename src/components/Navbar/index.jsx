import React from 'react';
import { NavLink } from 'react-router-dom';

import * as S from '@/components/Navbar/Navbar.style';
import { theme } from '@/styles/theme';

const Navbar = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarInner>
        <NavLink to="/" style={({ isActive }) => (isActive ? theme.activeNavStyle : undefined)}>
          <S.LogoIcon />
        </NavLink>
        <S.IconBox>
          <NavLink
            to="/wallet"
            style={({ isActive }) => (isActive ? theme.activeNavStyle : undefined)}
          >
            <S.MoneyIcon />
          </NavLink>
          <NavLink
            to="/stock"
            style={({ isActive }) => (isActive ? theme.activeNavStyle : undefined)}
          >
            <S.StockIcon />
          </NavLink>
        </S.IconBox>
      </S.NavbarInner>
    </S.NavbarWrapper>
  );
};

export default Navbar;
