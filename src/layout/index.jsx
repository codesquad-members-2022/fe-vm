import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import * as S from '@/layout/Layout.style';

const Layout = () => {
  return (
    <>
      <Navbar />
      <S.OuterContainer>
        <S.InnerContainer>
          <Outlet />
        </S.InnerContainer>
      </S.OuterContainer>
    </>
  );
};

export default Layout;
