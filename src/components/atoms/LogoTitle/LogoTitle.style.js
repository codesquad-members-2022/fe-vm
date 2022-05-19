import styled, { css } from 'styled-components';

const WhiteTextShadow = css`
  text-shadow: 3px 3px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
`;

const Title = styled.h1`
  display: inline;
  color: ${({ theme: { colors } }) => colors.purple};
  font-size: ${({ theme: { fontSize } }) => fontSize.logo};
  font-family: 'CherryBomb';
  text-align: center;
  background-color: ${({ theme: { colors } }) => colors.darkBlue};
  letter-spacing: -1px;
  ${WhiteTextShadow};
`;

export { Title };
