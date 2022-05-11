import { StyledContainer, StyledBtn } from './swtichBox.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SwitchBox() {
  const [clickedComponent, setClickedComponent] = useState('자판기');

  function clickVendingMachine() {
    setClickedComponent('자판기');
  }

  function clickWallet() {
    setClickedComponent('지갑');
  }

  return (
    <StyledContainer>
      <Link to="/">
        <StyledBtn onClick={clickVendingMachine} clickedComponent={clickedComponent} thisComponent="자판기">
          자판기
        </StyledBtn>
      </Link>
      <Link to="my_wallet">
        <StyledBtn onClick={clickWallet} clickedComponent={clickedComponent} thisComponent="지갑">
          지갑
        </StyledBtn>
      </Link>
    </StyledContainer>
  );
}
