import { useRef } from 'react';
import styled from 'styled-components';

import COLORS from 'constants/colors';

const VMInputBox = ({ defaultInput, updateInputMoney }) => {
  const inputRef = useRef();

  const handleClickInputButton = () => {
    updateInputMoney(inputRef.current.value);
  };

  return (
    <InputBoxWrapper>
      <input ref={inputRef} defaultValue={defaultInput} />
      <InputButton onClick={handleClickInputButton}>투입</InputButton>
    </InputBoxWrapper>
  );
};

const InputBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 5px;
`;

const InputButton = styled.button`
  background-color: ${COLORS.SKY_BLUE};
  color: ${COLORS.WHITE};
  cursor: pointer;
  border-radius: 2px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${COLORS.BLUE};
  }
`;

export default VMInputBox;
