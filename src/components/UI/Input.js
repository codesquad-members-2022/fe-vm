import React from 'react';
import styled from 'styled-components';

const Input = React.forwardRef((props, ref) => {
  return (
    <InputContainer>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </InputContainer>
  );
});

const InputContainer = styled.div`
  ${({ theme }) => theme.mixin.flexMixin('column', 'center', 'center')};
`;
export default Input;
