import React from 'react';
import ProductContext from 'context/Product';
import GlobalNavigation from 'components/GlobalNavigation';
import { Outlet } from 'react-router-dom';
import ToastNotification from 'components/ToastNotification';
import { useNotification } from 'context/Notification';
import { deleteMessage } from 'context/Notification/action';
import * as S from './style';

function Layout() {
  const { toastList, notifyDispatch } = useNotification();
  const deleteCallback = id => {
    deleteMessage(notifyDispatch, id);
  };
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
      <ToastNotification
        toastList={toastList}
        col="top"
        row="right"
        autoDelete
        autoDeleteTime={2000}
        deleteCallback={deleteCallback}
      />
    </S.AppContainer>
  );
}

export default Layout;
