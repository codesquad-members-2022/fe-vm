import React from 'react';

import * as S from './Navbar.style';

const Header = () => {
  return (
    <S.NavbarWrapper>
      <S.NavbarInner>
        <S.LogoIcon />
        <S.IconBox>
          <S.MoneyIcon />
          <S.StockIcon />
        </S.IconBox>
      </S.NavbarInner>
    </S.NavbarWrapper>
  );
};

export default Header;
