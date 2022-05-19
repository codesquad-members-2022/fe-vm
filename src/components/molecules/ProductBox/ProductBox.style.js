import { Border, Flex } from 'assets/style/common';
import styled from 'styled-components';

const ProductBox = styled.div`
  width: 102px;
  height: 125px;
  ${({ borderType }) => borderType && Border[borderType]}
  ${({ flexType }) => flexType && Flex[flexType]};
  flex-direction: column;
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.white}; ;
`;

export { ProductBox };
