import styled, { css } from "styled-components";

const insertButtonStyle = css`
  width: 25%;
  margin: 0;
  ${({ theme: { fontStyles } }) => fontStyles.buttons.large};
  background-color: ${({ theme: { colors } }) => colors.green};
`;

const inputStyle = css`
  width: 80%;
  height: 2rem;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.extraLarge};
`;

const Wrapper = styled.div`
  .alert {
    margin-top: 0.5rem;
    ${({ theme: { fontWeights, colors } }) => `
    font-weight: ${fontWeights.bold};
    color: ${colors.red}
    `};
  }
`;

const Form = styled.form`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.normal};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .input-wrap {
    width: 100%;
  }
`;

export { Wrapper, Form, insertButtonStyle, inputStyle };
