import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const VendingMachineContainer = styled.div`
  ${({ flex, direction }) => applyFlex({ flex, direction })};
  width: 1060px;
`;

export const Column = styled.div`
  ${({ flex }) => applyFlex({ flex })};
  margin: 20px;
`;
