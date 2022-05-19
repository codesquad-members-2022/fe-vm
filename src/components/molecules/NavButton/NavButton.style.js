import { Border, Flex } from 'assets/style/common';
import styled from 'styled-components';

const NavButton = styled.div`
  width: 312px;
  ${({ borderType }) => borderType && Border[borderType]}
  ${({ flexType }) => flexType && Flex[flexType]};
  overflow: hidden;
`;

export { NavButton };
