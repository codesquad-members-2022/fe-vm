import styled, { css } from "styled-components";

const Wrapper = styled.ul`
  ${({ theme: { whitespace, borders } }) => css`
    padding: ${whitespace.default};
    border: ${borders.bold};
  `};

  width: 11rem;
  height: 100%;
  margin: 0 auto;
`;

export default Wrapper;
