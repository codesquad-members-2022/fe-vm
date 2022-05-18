import React from 'react';
import ProductContext from 'context/Product';
import GlobalNavigation from 'components/GlobalNavigation';
import { Outlet } from 'react-router-dom';
import * as S from './style';

function Layout() {
  return (
    <S.AppContainer>
      <S.Header>
        <div>
          <GlobalNavigation />
        </div>
      </S.Header>
      <S.Main>
        <ProductContext>
          <Outlet />
        </ProductContext>
      </S.Main>
    </S.AppContainer>
  );
}

export default Layout;
