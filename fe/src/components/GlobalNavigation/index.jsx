import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import * as S from './style';

// FIXME: 새로 고침했을 때 URL과 상관없이 활성화탭이 0번으로 되는 버그
function GlobalNavigation() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <S.Navigation>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="상품 주문" to="/" component={Link} />
        <Tab label="재고 관리" to="/mangement" component={Link} />
      </Tabs>
    </S.Navigation>
  );
}

export default GlobalNavigation;
