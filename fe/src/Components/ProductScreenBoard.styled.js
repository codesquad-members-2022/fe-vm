import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const ScreenBoard = styled.div`
  width: 580px;
  border: 2px solid #3f51b5;
  box-sizing: border-box;
  ${({ flex, wrap }) => applyFlex({ flex, wrap })};
`;
