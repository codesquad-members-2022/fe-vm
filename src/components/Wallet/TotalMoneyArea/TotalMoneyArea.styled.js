import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: ${({ theme: { fontWeights } }) => fontWeights.bold};
`;

const MoneyArea = styled.div`
  ${({ theme: { fontSizes } }) => `
    font-size: ${fontSizes.large};
  `}
`;

const P = styled.p`
  ${({ theme: { whitespace } }) => `
  margin-bottom: ${whitespace.small};
  `};
`;

export { Wrapper, MoneyArea, P };
