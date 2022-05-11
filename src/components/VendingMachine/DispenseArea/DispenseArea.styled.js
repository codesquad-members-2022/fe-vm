import styled, { css } from "styled-components";

const returnButtonStyle = css`
  width: 100%;
  ${({ theme: { fontStyles } }) => fontStyles.buttons.large};

  ${({ theme: { colors, whitespace } }) => `
    background-color: ${colors.darkblue};
    margin: ${whitespace.default} 0;
  `}
`;

const DispenseAreaWrap = styled.div`
  height: 100%;
`;

export { returnButtonStyle, DispenseAreaWrap };
