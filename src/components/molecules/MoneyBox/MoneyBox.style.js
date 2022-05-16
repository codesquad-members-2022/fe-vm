import { Flex } from 'assets/style/common';
import styled, { css } from 'styled-components';

const StyledMoneyBox = styled.div`
  width: 425px;
  ${({ flexType }) => flexType && Flex[flexType]};
`;

export { StyledMoneyBox };
