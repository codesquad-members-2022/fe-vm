import { Border, Flex } from 'assets/style/common';
import styled from 'styled-components';

const StyledVM = styled.div`
  width: 630px;
  height: 740px;
  ${({ flexType }) => flexType && Flex[flexType]};
  flex-direction: column;
  padding: 10px 10px 0px;
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
`;

const ProductWrapper = styled.div`
  width: 590px;
  height: 600px;
  padding: 10px;
  margin-bottom: 10px;
  ${({ flexType }) => flexType && Flex[flexType]};
  flex-wrap: wrap;
  background-color: ${({ theme: { colors } }) => colors.skyBlue};
`;

export { StyledVM, ProductWrapper };
