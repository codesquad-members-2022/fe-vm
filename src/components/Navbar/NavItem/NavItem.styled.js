import styled from "styled-components";

const Wrapper = styled.div`
  display: inline-block;
  width: 10rem;

  ${({ theme: { fontStyles } }) => fontStyles.nav}

  .link {
    display: block;
    border-bottom: 4px solid ${({ theme: { colors } }) => colors.white};

    &:hover {
      ${({ theme: { colors, whitespace } }) => `
          background-color: ${colors.black};
          border-radius: ${whitespace.default};
          color: ${colors.white};
          `}
    }
  }

  .current-path {
    border-color: ${({ theme: { colors } }) => colors.black};
  }
`;

export default Wrapper;
