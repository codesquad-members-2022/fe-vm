import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'constant/route';
import { Tab, Tabs } from '@mui/material';
import { useUserContext } from 'context/User';
import useModal from 'hooks/useModal';
import LoginModal from 'components/LoginModal';
import * as S from './style';

function GlobalNavigation() {
  const [isModalOpen, handleOpenModal] = useModal();
  const { nickname } = useUserContext();
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
        <Tab label="재고 관리" to={ROUTE.MANGEMENT} component={Link} />
      </Tabs>
      {nickname ? (
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
