import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 0.8em;
  //   font-weight: ${({ theme }) => theme.fontWeight.bold}
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const Button = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
