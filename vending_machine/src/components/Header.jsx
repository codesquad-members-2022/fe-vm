import React, { useState } from 'react';
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
      <Button
        content={'자판기'}
        disabled={isClickedVM}
        onClick={() => {
          changePage('/');
          changeColor(isClickedVM);
        }}
      />{' '}
      <Button
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

export default Header;
