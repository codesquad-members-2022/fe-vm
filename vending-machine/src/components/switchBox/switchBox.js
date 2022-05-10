import { StyledBox, StyledBtn } from './swtichBox.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function SwitchBox() {
  const [clickedComponent, setClickedComponent] = useState('자판기');

  function toggleClickedComponent() {
    clickedComponent === '자판기' ? setClickedComponent('지갑') : setClickedComponent('자판기');
  }

  return (
    <StyledBox>
      <Link to="/">
        <StyledBtn onClick={toggleClickedComponent} clickedComponent={clickedComponent} thisComponent="자판기">
          자판기
        </StyledBtn>
      </Link>
      <Link to="my_wallet">
        <StyledBtn onClick={toggleClickedComponent} clickedComponent={clickedComponent} thisComponent="지갑">
          지갑
        </StyledBtn>
      </Link>
    </StyledBox>
  );
}
