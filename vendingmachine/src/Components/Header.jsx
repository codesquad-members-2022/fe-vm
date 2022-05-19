import React from 'react';
import { Container } from 'components/App.Styled';
import GNB from 'components/GNB';

const Header = () => {
  return (
    <Container as="header">
      <GNB />
    </Container>
  );
};

export default React.memo(Header);
