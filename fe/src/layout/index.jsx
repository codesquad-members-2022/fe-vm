import GlobalNavigation from 'components/GlobalNavigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
import * as S from './style';

// TODO: navigation 컴포넌트로 분리하기

function Layout() {
  return (
    <S.AppContainer>
      <GlobalNavigation />
      <S.Main>
        <Outlet />
      </S.Main>
    </S.AppContainer>
  );
}

export default Layout;
