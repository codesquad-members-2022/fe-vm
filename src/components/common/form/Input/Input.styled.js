import styled, { css } from "styled-components";

const StyledInput = styled.input`
  ${({ style: { size, fontSize } }) => {
    return css`
      width: ${size.width};
      height: ${size.height};
      font-size: ${fontSize};
    `;
  }}
`;

export default StyledInput;
