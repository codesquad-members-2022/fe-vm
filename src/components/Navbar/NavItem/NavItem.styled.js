import styled from "styled-components";

export const CLASS_NAME = {
  ACTIVE: "current-path",
  LINK: "link",
};

const Wrapper = styled.div`
  display: inline-block;
  width: 10rem;

  ${({ theme: { fontStyles } }) => fontStyles.nav}

  .${CLASS_NAME.LINK} {
    display: block;
    border-bottom: 4px solid ${({ theme: { colors } }) => colors.white};

    &:hover:not(.${CLASS_NAME.ACTIVE}) {
      ${({ theme: { colors, whitespace } }) => `
          background-color: ${colors.black};
          border-radius: ${whitespace.default};
          color: ${colors.white};
          `}
    }
  }

  .${CLASS_NAME.ACTIVE} {
    border-color: ${({ theme: { colors } }) => colors.black};
    cursor: default;
  }
`;

export default Wrapper;
