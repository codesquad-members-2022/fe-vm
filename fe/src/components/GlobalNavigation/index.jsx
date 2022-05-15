import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from 'constant/route';
import { Tab, Tabs } from '@mui/material';
import * as S from './style';

function GlobalNavigation() {
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
