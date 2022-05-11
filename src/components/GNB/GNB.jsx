/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Container, NavItem } from 'components/GNB/GNB.style';

export default function GNB() {
  const NavItems = [
    { to: '/', value: '자판기' },
    { to: '/wallet', value: '지갑' }
  ];
  const [selecetedNavIdx, setSelectedNavIdx] = useState(0);

  const handleNavClick = function (idx) {
    if (idx === selecetedNavIdx) return;
    setSelectedNavIdx(idx);
  };

  return (
    <Container>
      {NavItems.map(({ to, value }, idx) => (
        <NavItem key={idx} to={to} onClick={() => handleNavClick(idx)} isSelected={selecetedNavIdx === idx}>
          {value}
        </NavItem>
      ))}
    </Container>
  );
}
