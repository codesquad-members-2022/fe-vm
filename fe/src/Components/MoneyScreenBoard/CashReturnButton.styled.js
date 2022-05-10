import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const ReturnButton = styled.button`
  ${({ theme }) => theme};
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  cursor: pointer;
`;
