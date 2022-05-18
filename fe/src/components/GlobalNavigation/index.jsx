import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import LoginModal from 'components/LoginModal';
import { useUserContext } from 'context/User';
import useModal from 'hooks/useModal';
import { isLogin } from 'utils/cookie';
import { ROUTE } from 'constant/route';
import * as S from './style';

// TODO: 로그인 관련 창 토글로 분리하기

function GlobalNavigation() {
  const [isModalOpen, handleOpenModal] = useModal();
  const { nickname, isManager } = useUserContext();
  const [activeTabIndex, setActiveTabIndex] = useState(currentTab);
  const handleActiveTab = (event, newValue) => {
    setActiveTabIndex(newValue);
  };

  return (
    <S.Navigation>
      <Tabs
        value={activeTabIndex}
        onChange={handleActiveTab}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="상품 주문" to={ROUTE.HOME} component={Link} />
        {isManager && <Tab label="재고 관리" to={ROUTE.MANGEMENT} component={Link} />}
      </Tabs>
      {isLogin() && nickname ? (
        <span>{nickname}</span>
      ) : (
        <button type="button" onClick={handleOpenModal}>
          로그인
        </button>
      )}
      <LoginModal isModalOpen={isModalOpen} handleOpenModal={handleOpenModal} />
    </S.Navigation>
  );
}

export default GlobalNavigation;

const ROUTER_INDEX = {
  [ROUTE.HOME]: 0,
  [ROUTE.MANGEMENT]: 1,
};

const currentTab = () => {
  const path = window.location.pathname;
  return ROUTER_INDEX[path];
};
