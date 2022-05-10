import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const Screen = styled.div`
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  ${({ theme }) => theme};
`;
