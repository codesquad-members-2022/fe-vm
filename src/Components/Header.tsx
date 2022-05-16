import styled, { css } from 'styled-components';
import { useState } from 'react';

interface TStyledView {
  active: boolean;
}

interface HeaderProps {
  tab: string;
  texts: string[];
  toggleTab: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderWrapper = styled.header`
  height: 50px;
  margin: 20px 0;
  text-align: center;
`;

const Button = styled.button<TStyledView>`
  width: 80px;
  height: 50px;
  background-color: ${props => {
    if (props.active) {
      return css`
        ${({ theme }) => theme.colors.gray1}
      `;
    } else {
      return css`
        ${({ theme }) => theme.colors.white}
      `;
    }
  }};
  color: ${props => {
    if (props.active) {
      return css`
        ${({ theme }) => theme.colors.white}
      `;
    } else {
      return css`
        ${({ theme }) => theme.colors.gray1}
      `;
    }
  }};
  border: none;
  outline: none;
  cursor: pointer;
`;

export default function Header({
  tab,
  texts,
  toggleTab,
}: HeaderProps): JSX.Element {
  const [tab1, tab2] = texts;
  const [active, setActive] = useState(true);

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (tab === e.currentTarget.name) return;
    setActive(!active);
    toggleTab(e.currentTarget.name);
  };

  return (
    <>
      <HeaderWrapper>
        <Button active={active} onClick={handleTabClick} name={tab1}>
          {tab1}
        </Button>
        <Button active={!active} onClick={handleTabClick} name={tab2}>
          {tab2}
        </Button>
      </HeaderWrapper>
    </>
  );
}
