import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './Button';

function Input() {
  const [price, setPrice] = useState(0);
  const [content, setContent] = useState(0);

  const handleChangeInput = ({ currentTarget }) => {
    setContent(currentTarget.textContent);
  };

  const handleClickSave = () => {
    setPrice(content);
  };

  return (
    <>
      <StyledInputContainer>
        <StyledInput
          contentEditable="true"
          onInput={handleChangeInput}
          placeholder="0원"
          suppressContentEditableWarning
        >
          {price > 0 && `${price}원`}
        </StyledInput>
      </StyledInputContainer>
      <Button icon="추가" onClick={handleClickSave} />
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

export default Input;
