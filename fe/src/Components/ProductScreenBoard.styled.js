import { applyFlex } from 'Helper/utils';
import styled from 'styled-components';

export const ScreenBoard = styled.div`
  width: 580px;
  border: 1px solid #3f51b5;
  ${({ flex, wrap }) => applyFlex({ flex, wrap })}
`;
