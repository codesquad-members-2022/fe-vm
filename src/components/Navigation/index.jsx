import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Navigation = () => {
  const location = useLocation();
  const [focusLink, setFocusLink] = useState(location.pathname);

  const onClick = e => {
    if (!e.target.id) return;
    setFocusLink(e.target.id);
  };

  useEffect(() => {
    setFocusLink(location.pathname);
  }, [location.pathname]);

  const MACHINE_ID = '/';
  const WALLET_ID = '/wallet';

  return (
    <>
      {(location.pathname === '/' || location.pathname === '/wallet') && (
        <Nav onClick={onClick}>
          <StyeldLink to="/" focus={focusLink} id={MACHINE_ID}>
            🧃 자판기
          </StyeldLink>
          <StyeldLink to="wallet" focus={focusLink} id={WALLET_ID}>
            지갑 💵
          </StyeldLink>
        </Nav>
      )}
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
`;

const StyeldLink = styled(Link)`
  width: 136px;
  padding: 12px 0;
  ${({ theme }) => theme.fontStyles.xLargeBold};
  ${props =>
    props.focus === props.id &&
    css`
      background: ${({ theme }) => theme.colors.blue};
      color: ${({ theme }) => theme.colors.white};
    `};

  &:first-child {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-right: none;
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border: 1px solid ${({ theme }) => theme.colors.blue};
    border-radius: 0 8px 8px 0;
  }
`;

export default Navigation;
