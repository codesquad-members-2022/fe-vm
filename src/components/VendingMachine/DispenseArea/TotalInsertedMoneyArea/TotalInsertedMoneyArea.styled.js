import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { whitespace, fontSizes, fontWeights } }) => css`
    margin-top: ${whitespace.default};
    font-size: ${fontSizes.large};
    font-weight: ${fontWeights.bold};
  `};
`;

const TotalInsertedMoney = styled.div`
  ${({ theme: { colors, whitespace } }) => css`
    margin-left: ${whitespace.small};
    padding: ${whitespace.small};
    background-color: ${colors.black};
    color: ${colors.white};
  `};

  width: calc(100% - 5rem);
  display: inline-block;
  text-align: right;
`;

export { Wrapper, TotalInsertedMoney };
