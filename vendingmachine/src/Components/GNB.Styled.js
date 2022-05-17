import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GNBList = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  .active {
    border-bottom: solid
      ${({ theme }) => [theme.borderSize.small, theme.color.black]};
  }
`;

export const GNBLink = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.padding.medium};
`;
