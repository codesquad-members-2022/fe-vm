import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../styled-components/util';
import GNB from './GNB';

const Header = () => {
  return (
    <Container as="header">
      <GNB />
    </Container>
  );
};

const Container = styled(flexCenter)`
  margin-top: ${({ theme }) => theme.margin.medium};
`;

export default React.memo(Header);
