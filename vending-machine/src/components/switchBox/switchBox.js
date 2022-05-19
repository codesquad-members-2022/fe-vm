import { StyledContainer, StyledBtn } from './swtichBox.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SwitchBox() {
  const [clickedTab, setClickedTab] = useState('자판기');

  function clickVendingMachine() {
    setClickedTab('자판기');
  }

  function clickWallet() {
    setClickedTab('지갑');
  }

  return (
    <StyledContainer>
      <Link to="/">
        <StyledBtn onClick={clickVendingMachine} clickedTab={clickedTab} curTab="자판기">
          자판기
        </StyledBtn>
      </Link>
      <Link to="my_wallet">
        <StyledBtn onClick={clickWallet} clickedTab={clickedTab} curTab="지갑">
          지갑
        </StyledBtn>
      </Link>
    </StyledContainer>
  );
}
