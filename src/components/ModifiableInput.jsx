import React from 'react';
import styled from 'styled-components';

function ModifiableInput({ value, handler }) {
  return (
    <>
      <Input as="input" type="number" onChange={handler} value={value} />
      <span>원</span>
      <button type="button">투입</button>
    </>
  );
}

const Input = styled.input`
  width: '75%';
  text-align: right;
  border: '1px solid black';
  padding-right: '5px';
`;

export default ModifiableInput;
