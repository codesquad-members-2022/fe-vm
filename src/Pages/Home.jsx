import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';

import {UiChangeBtn} from '../Component';
import {UserAccountContext} from '../Store';

const DEFAULT_PAGE = 'vendingMachine';
const USER_WALLET = 'wallet';

export const Home = () => {
  const [currentPage, setcurrentPage] = useState(DEFAULT_PAGE);

  //Todo: UI 비교 로직(인자 받는게 너무 많음) 및 로직 개선
  const changeUiState = (e, currentUi, btnUi) => {
    if (currentUi === btnUi) {
      e.preventDefault();
      return;
    }
    switch (currentUi) {
      case DEFAULT_PAGE:
        setcurrentPage(USER_WALLET);
        break;

      case USER_WALLET:
        setcurrentPage(DEFAULT_PAGE);
        break;

      default:
        throw new Error('페이지 에러');
    }
  };
  return (
    <>
      <UiChangeBtn handleChangeBtn={changeUiState} currentPage={currentPage} />
      <UserAccountContext currentPage={currentPage}>
        <Outlet />
      </UserAccountContext>
    </>
  );
};
