import React from 'react';
import VMContext from 'context/VMContext';
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
        <VMContext>
          <Outlet />
        </VMContext>
      </S.Main>
    </S.AppContainer>
  );
}

export default Layout;
