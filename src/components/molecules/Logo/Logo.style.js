import { Flex } from 'assets/style/common';
import styled, { css } from 'styled-components';

const StyledLogo = styled.div`
  width: 100%;
  height: 90px;
  ${({ flexType }) => flexType && Flex[flexType]};
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
`;

export { StyledLogo };
