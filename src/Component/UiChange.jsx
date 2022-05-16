import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

const DEFAULT_PAGE = 'vendingMachine';
const USER_WALLET = 'wallet';

export const UiChangeBtn = ({handleChangeBtn, currentPage}) => {
  return (
    <ButtonWrapper>
      <Link
        to="/vendingMachine"
        onClick={e => {
          handleChangeBtn(e, currentPage, DEFAULT_PAGE);
        }}
      >
        <ChangeBtn>자판기</ChangeBtn>
      </Link>
      <Link to="/wallet">
        <ChangeBtn
          onClick={e => {
            handleChangeBtn(e, currentPage, USER_WALLET);
          }}
        >
          지갑
        </ChangeBtn>
      </Link>
    </ButtonWrapper>
  );
};

const ChangeBtn = styled.button`
  width: 200px;
  height: 80px;
  border: 1px solid black;
  background-color: white;
  cursor: pointer;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  :active {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0;
`;
