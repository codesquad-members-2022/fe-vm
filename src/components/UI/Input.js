import React from 'react';
import styled from 'styled-components';
import Container from './container';

const Input = React.forwardRef((props, ref) => {
  return (
    <Container width="100%" flexInfo={['column']}>
      <label htmlFor={props.input.id}></label>
      <StyledInput ref={ref} {...props.input} />
    </Container>
  );
});

const StyledInput = styled.input`
  width: 80%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 0 10px;
  border: none;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: right;
  &:focus {
    outline: none;
  }
`;

export default Input;
