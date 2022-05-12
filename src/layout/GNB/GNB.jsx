/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { Container, NavItem } from 'layout/GNB/GNB.style';

const navItems = [
  { to: '/', value: '자판기' },
  { to: '/wallet', value: '지갑' }
];

export default function GNB() {
  const [selecetedNavIdx, setSelectedNavIdx] = useState(0);

  function handleNavClick(idx) {
    setSelectedNavIdx(idx);
  }

  return (
    <Container>
      {navItems.map(({ to, value }, idx) => (
        <NavItem key={idx} to={to} onClick={() => handleNavClick(idx)} isSelected={selecetedNavIdx === idx}>
          {value}
        </NavItem>
      ))}
    </Container>
  );
}
