import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';
export const Screen = styled.div`
  ${({ theme }) => theme};
  ${({ flex, justify, align }) => applyFlex({ flex, justify, align })};
  margin-top: 50px;
`;
