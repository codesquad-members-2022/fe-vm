import React from 'react';
import styled from 'styled-components';
import { color } from '../style/variables';

const Button = ({ content, disabled, onClick }) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  border: 2px solid ${color.black};
  :disabled {
    background-color: ${color.black};
    color: ${color.white};
  }
`;

export default Button;
