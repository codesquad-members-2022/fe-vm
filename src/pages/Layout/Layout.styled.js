import styled from "styled-components";

const Wrap = styled.div`
  margin: 0 auto;
  width: 45rem;
  height: 100%;

  .gnb {
    text-align: center;
    margin: ${({ theme: { whitespace } }) => whitespace.default} 0;
  }
`;

const Main = styled.main`
  height: 40rem;
`;

export { Wrap, Main };
