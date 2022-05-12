import React from 'react';
import styled from 'styled-components';

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
