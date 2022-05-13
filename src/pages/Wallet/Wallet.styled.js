import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme: { whitespace, borders } }) => css`
    padding: ${whitespace.default};
    border: ${borders.bold};
  `};

  width: 11rem;
  height: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Wrapper;
