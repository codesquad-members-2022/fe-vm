import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './style';

function GlobalNavigation() {
  return (
    <S.Header>
      <Link to="/">상품 주문</Link>
      <Link to="/mangement">재고 관리</Link>
    </S.Header>
  );
}

export default GlobalNavigation;
