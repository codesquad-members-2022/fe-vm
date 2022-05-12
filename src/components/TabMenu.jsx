import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { COLORS, TYPOGRAPHY } from 'constants';
import { useState } from 'react';

const menus = [
  { id: 1, label: '자판기', link: 'vendingMachine' },
  { id: 2, label: '내 지갑', link: 'wallet' },
  { id: 3, label: '상품 관리', link: 'admin' },
];

const TabMenu = () => {
  const defaultMenuId = 1;
  const [activeTabId, setActiveTabId] = useState(defaultMenuId);

  const handleTabClick = id => {
    if (activeTabId === id) return;
    setActiveTabId(id);
  };

  return (
    <nav>
      <Menus>
        {menus.map(({ id, label, link }) => (
          <Menu key={id} isActive={id === activeTabId ? true : false}>
            <Link onClick={() => handleTabClick(id)} to={link}>
              {label}
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
    ${({ isActive }) => (isActive ? `border-bottom: 2px solid ${COLORS.BLUE}` : '')};
  }
`;

export default TabMenu;
