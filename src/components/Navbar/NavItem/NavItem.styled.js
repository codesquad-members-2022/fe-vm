import styled, { css } from "styled-components";

const navButtonStyle = css`
  width: 10rem;
  ${({ theme: { fontStyles } }) => fontStyles.nav}

  &:hover {
    ${({ theme: { colors, whitespace } }) => `
      background-color: ${colors.black};
      border-radius: ${whitespace.default};
      color: ${colors.white};
    `}
  }
`;

const Wrapper = styled.div`
  display: inline-block;
  ${({ theme: { colors, whitespace }, isCurrentLocation }) => `
      border-radius: ${whitespace.default};
      border: ${isCurrentLocation && `2px solid ${colors.darkblue}`};
    `}
`;

export { Wrapper, navButtonStyle };
