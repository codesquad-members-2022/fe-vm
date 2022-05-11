import styled, { css } from "styled-components";

const moneyButtonStyle = css`
  width: 4rem;
  ${({ theme: { fontStyles } }) => fontStyles.buttons.large};

  ${({ theme: { colors, whitespace } }) => `
    margin: 0 ${whitespace.default} 0 0;
    background-color: ${colors.green};
  `}
`;

const MoneyLi = styled.li`
  width: 100%;
  display: flex;

  &:not(:last-child) {
    margin-bottom: ${({ theme: { whitespace } }) => whitespace.small};
  }

  .money {
    border-radius: 4rem;
  }

  .count {
    width: 4rem;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
    line-height: ${({ theme: { sizes } }) => sizes.button.height};
    text-align: center;
    border-bottom: ${({ theme: { borders } }) => borders.bold};
  }
`;

export { MoneyLi, moneyButtonStyle };
