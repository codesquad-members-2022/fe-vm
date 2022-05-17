import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { color } from '../style/variables';

const Header = () => {
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
    <StyledGnb>
      <MainBtn
        content={'자판기'}
        disabled={isClickedVM}
        onClick={() => {
          changePage('/fe-vm');
          changeColor(isClickedVM);
        }}
      />
      <MainBtn
        content={'지갑'}
        disabled={isClickedWallet}
        onClick={() => {
          changePage('/wallet');
          changeColor(isClickedWallet);
        }}
      />
    </StyledGnb>
  );
};

const StyledGnb = styled.nav`
  margin-top: 20px;
`;

const MainBtn = styled(Button)`
  border: 2px solid ${color.black};

  &:disabled {
    background-color: ${color.black};
    color: ${color.white};
  }
`;

export default Header;
