import React from 'react';
import { Container, NavItem } from 'components/GNB.style';

export default function GNB() {
  return (
    <Container>
      <NavItem to="/">자판기</NavItem>
      <NavItem to="/wallet">지갑</NavItem>
    </Container>
  );
}
