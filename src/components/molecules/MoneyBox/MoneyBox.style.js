import { Flex } from 'assets/style/common';
import styled from 'styled-components';

const MoneyBox = styled.div`
  width: 425px;
  ${({ flexType }) => flexType && Flex[flexType]};
`;

export { MoneyBox };
