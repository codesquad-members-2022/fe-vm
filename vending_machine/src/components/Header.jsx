import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import { color } from '../style/variables';

function Header() {
  const navigate = useNavigate();
  const [isClickedVM, setIsClickedVM] = useState(true);
  const [isClickedWallet, setIsClickedWallet] = useState(false);

  const changePage = (url) => navigate(`${url}`);

  const changeColor = (target) => {
    if (target) return;

    setIsClickedVM(!isClickedVM);
    setIsClickedWallet(!isClickedWallet);
  };

  return (
    <StyledNav>
      <MainBtn
        onClick={() => {
          changePage('/');
          changeColor(isClickedVM);
        }}
        clicked={isClickedVM}
      >
        자판기
      </MainBtn>

      <MainBtn
        onClick={() => {
          changePage('/wallet');
          changeColor(isClickedWallet);
        }}
        clicked={isClickedWallet}
      >
        지갑
      </MainBtn>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  margin-top: 20px;
`;

const MainBtn = styled.button`
  border: 2px solid ${color.black};
  background-color: ${({ clicked }) => (clicked ? color.black : '')};
  color: ${({ clicked }) => (clicked ? color.white : color.black)};
`;

export default Header;
