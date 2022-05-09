import React from 'react';
import styled from 'styled-components';
import { flexCenter } from '../styled-components/util';
import GNB from './GNB';

const Header = () => {
  return (
    <HeaderContainer as="header">
      <GNB />
    </HeaderContainer>
  );
};

const HeaderContainer = styled(flexCenter)`
  margin-top: ${({ theme }) => theme.margin.medium};
`;

export default React.memo(Header);
