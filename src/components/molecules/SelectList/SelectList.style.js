import { Border, Flex } from 'assets/style/common';
import styled from 'styled-components';

const StyledSelectList = styled.ul`
  width: 183px;
  height: 43px;
  ${({ borderType }) => borderType && Border[borderType]}
  ${({ flexType }) => flexType && Flex[flexType]};
  border-radius: 0px 0px 0px 5px;
  padding: 10px;
`;

const StyledSelectTitle = styled.span`
  font-size: ${({ theme: { fontSize } }) => fontSize.large};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  color: ${({ theme: { colors } }) => colors.black};
`;

export { StyledSelectList, StyledSelectTitle };
