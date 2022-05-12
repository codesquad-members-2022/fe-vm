import styled, { css } from 'styled-components';

const WhiteTextShadow = css`
  text-shadow: 3px 3px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
`;

const StyledTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.purple};
  font-size: ${({ theme: { fontSize } }) => fontSize.logo};
  font-family: 'CherryBomb';
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
  letter-spacing: -1px;
  ${WhiteTextShadow};
`;

export { StyledTitle };
