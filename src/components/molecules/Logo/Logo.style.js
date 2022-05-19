import { Flex } from 'assets/style/common';
import styled from 'styled-components';

const Logo = styled.div`
  width: 100%;
  height: 90px;
  ${({ flexType }) => flexType && Flex[flexType]};
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
`;

export { Logo };
