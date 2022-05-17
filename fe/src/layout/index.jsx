import React from 'react';
import ProductContext from 'context/Product';
import UserContext from 'context/User';
import GlobalNavigation from 'components/GlobalNavigation';
import { Outlet } from 'react-router-dom';
import * as S from './style';

function Layout() {
  return (
    <S.AppContainer>
      <UserContext>
        <>
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
        </>
      </UserContext>
    </S.AppContainer>
  );
}

export default Layout;
