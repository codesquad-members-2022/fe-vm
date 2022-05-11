import styled, { css } from "styled-components";

const insertButtonStyle = css`
  width: 25%;
  margin: 0;
  ${({ theme: { fontStyles } }) => fontStyles.buttons.large};
  background-color: ${({ theme: { colors } }) => colors.green};
`;

const Wrapper = styled.div`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.normal};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-wrap {
    width: 100%;
  }
`;

export { Wrapper, insertButtonStyle };
