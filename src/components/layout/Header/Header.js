import React from 'react';
import styled from 'styled-components';
import { _ } from '../../../constant/constant';

const Header = () => {
  return (
    <StyledHeader>
      <Title>VENDING MACHINE</Title>
      <Timer>1</Timer>
    </StyledHeader>
  );
};

export default React.memo(Header);

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixin.flexMixin(_, _, 'space-between')};
  padding: 20px 40px 20px 20px;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xLarge};
  font-weight: ${({ theme }) => theme.fontWeight.xBold};
  font-style: italic;
`;

const Timer = styled.span`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
