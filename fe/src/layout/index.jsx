import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as S from './style';

// TODO: navigation 컴포넌트로 분리하기

function Layout() {
  return (
    <S.AppContainer>
      <S.Header>
        <Link to="/">홈</Link>
      </S.Header>
      <S.Main>
        <Outlet />
      </S.Main>
    </S.AppContainer>
  );
}

export default Layout;
