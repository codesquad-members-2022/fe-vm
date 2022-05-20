import React from 'react';
import styled from 'styled-components';

function UnModifiableInput({ value, handler }) {
  return (
    <>
      <Money onClick={handler}>{value}</Money>
      <span>원</span>
    </>
  );
}

export default UnModifiableInput;

const Money = styled.div({
  width: '100%',
  textAlign: 'right',
  border: '1px solid black',
  paddingRight: '5px',
});
