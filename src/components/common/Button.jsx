import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const colorStyles = css`
  ${({ theme, color }) => {
    const selected = theme.palette[color];
    return css`
      background: ${selected};
      color: ${color === "black" ? "#fff" : "#000"};

      &:hover {
        background: ${lighten(0.1, selected)};
      }
      &:active {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const sizeStyles = css`
  ${({ theme, size }) => {
    const selected = theme.sizes[size];
    return css`
      height: ${selected.height};
      font-size: ${selected.fontSize};
    `;
  }}
`;

const StyledButton = styled.button`
  display: grid;
  place-items: center;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 10px;

  ${colorStyles}

  ${sizeStyles}

  &:hover {
    cursor: pointer;
  }
`;

function Button({ children, color, ...rest }) {
  return (
    <StyledButton color={color} {...rest}>
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: "white",
};

export { Button };
