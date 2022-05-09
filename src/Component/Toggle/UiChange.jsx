import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import styled from 'styled-components';

export const UiChangeBtn = () => {
  return (
    <ButtonWrapper>
      <Link to="/">
        <ChangeBtn>자판기</ChangeBtn>
      </Link>
      <Link to="/wallet">
        <ChangeBtn>지갑</ChangeBtn>
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

  // :first-child {
  //   border-right: none;
  // }

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
