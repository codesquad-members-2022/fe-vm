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
    if (Number.isNaN(Number(content))) {
      window.alert('숫자만 입력 가능합니다.');
      return;
    }

    if (Number(content) < 10) {
      window.alert('10원 이상 추가해야합니다.');
      return;
    }

    // Todo : 지갑에 요금의 개수가 없거나 지갑 전체 요금보다 큰 경우 예외처리
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
