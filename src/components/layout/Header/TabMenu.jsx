import { useContext } from 'react';
import { Link, useMatch } from 'react-router-dom';
import styled from 'styled-components';

import { CashContext } from 'context';
import { COLORS, TYPOGRAPHY } from 'constants';
import { formatPrice } from 'util/util';

const menus = [
  { id: 1, label: '자판기', link: 'vendingMachine' },
  { id: 2, label: '내 지갑', link: 'wallet' },
  { id: 3, label: '상품 관리', link: 'admin' },
];

const TabMenu = () => {
  const path = useMatch('/:page')?.params.page;
  const walletMenuId = 2;

  const { totalCash } = useContext(CashContext);

  return (
    <nav>
      <Menus>
        {menus.map(({ id, label, link }) => (
          <Menu key={id} isActive={link === path}>
            <Link to={link}>
              {label}
              {id === walletMenuId && `(${formatPrice(totalCash)})`}
            </Link>
          </Menu>
        ))}
      </Menus>
    </nav>
  );
};

const Menus = styled.ul`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Menu = styled.li`
  a {
    display: block;
    padding: 0 0 16px;
    font-size: ${TYPOGRAPHY.SIZE.LARGE};
    font-weight: ${TYPOGRAPHY.WEIGHT.MEDIUM};
    color: ${({ isActive }) => (isActive ? COLORS.BLUE : COLORS.BLACK)};
    ${({ isActive }) => isActive && `border-bottom: 2px solid ${COLORS.BLUE}`};
  }
`;

export default TabMenu;
