import styled from "styled-components";
import theme from "styles/theme";

const moneyButtonStyle = {
  size: { width: "4rem", height: "3rem" },
  margin: `0 ${theme.whitespace.default} 0 0`,
  bgColor: theme.colors.green,
  fontStyle: theme.fontStyles.buttons.large,
};

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
    font-size: ${({ theme: { fontStyles } }) => fontStyles.large};
    line-height: 3rem;
    text-align: center;
    border-bottom: ${({ theme: { borders } }) => borders.bold};
  }
`;

export { MoneyLi, moneyButtonStyle };
