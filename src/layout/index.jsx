import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import { VendorProvider } from '@/context/VendorProvider';
import * as S from '@/layout/Layout.style';

const Layout = () => {
  return (
    <>
      <Navbar />
      <S.OuterContainer>
        <S.InnerContainer>
          <VendorProvider>
            <Outlet />
          </VendorProvider>
        </S.InnerContainer>
      </S.OuterContainer>
    </>
  );
};

export default Layout;
