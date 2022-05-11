import styled, { css } from "styled-components";

const StyledButton = styled.button`
  ${({ style: { size, fontStyle, border, margin, bgColor, hover } }) => {
    return css`
      width: ${size.width};
      height: ${size.height};
      font-size: ${fontStyle.size};
      line-height: ${fontStyle.lineHeight || "normal"};
      color: ${fontStyle.color || `${({ theme: { colors } }) => colors.black}`};
      font-weight: ${fontStyle.fontWeight || "normal"};
      margin: ${margin ||
      `0 0 0 ${({ theme: { whitespace } }) => whitespace.default}`};
      border: ${border || "none"};
      background-color: ${bgColor ||
      `${({ theme: { colors } }) => colors.white}`};

      &:hover {
        ${hover}
      }
    `;
  }}

  letter-spacing: -0.7px;
  word-break: keep-all;
  border-color: ${({ theme: { colors } }) => colors.black};
`;

export default StyledButton;
