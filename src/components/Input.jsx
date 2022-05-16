/* eslint-disable react/require-default-props */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Button from './Button';

export default function Input({ price, onChangeInput, onClickSave }) {
  return (
    <>
      <StyledInputContainer>
        <StyledInput
          contentEditable="true"
          onInput={onChangeInput}
          placeholder="0원"
          suppressContentEditableWarning
        >
          {price > 0 && `${price}원`}
        </StyledInput>
      </StyledInputContainer>
      <Button icon="추가" onClick={onClickSave} />
    </>
  );
}

const StyledInputContainer = styled.div`
  max-width: 100px;
  padding: 16px 24px;
  border: 1px solid #d6d6d6;
  border-radius: 6px;
`;

const StyledInput = styled.div`
  &:empty:before {
    content: attr(placeholder);
    color: grey;
  }
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  white-space: nowrap;
  &:focus {
    outline: none;
  }
`;

Input.propTypes = {
  price: PropTypes.number,
  onChangeInput: PropTypes.func,
  onClickSave: PropTypes.func,
};
