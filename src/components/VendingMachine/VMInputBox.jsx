import { useRef } from 'react';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import createHoverCss from 'styles/createHoverCss';

const VMInputBox = ({ defaultInput, updateInputMoney, isRetrying }) => {
  const inputRef = useRef();
  const hoverCss = createHoverCss({
    bgColor: {
      base: COLORS.SKY_BLUE,
      hover: COLORS.BLUE,
    },
  });
  const handleClickInputButton = () => {
    updateInputMoney(inputRef.current.value);
  };

  return (
    <InputBoxWrapper>
      <MoneyInput
        isRetrying={isRetrying}
        ref={inputRef}
        defaultValue={defaultInput}
      />
      <InputButton onClick={handleClickInputButton} hoverCss={hoverCss}>
        투입
      </InputButton>
    </InputBoxWrapper>
  );
};

const MoneyInput = styled.input`
  border: 2px solid
    ${({ isRetrying }) => (isRetrying ? COLORS.RED : COLORS.SKY_BLUE)};
`;

const InputBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-gap: 5px;
  padding: 0px 10px;
`;

const InputButton = styled.button`
  color: ${COLORS.WHITE};
  cursor: pointer;
  border-radius: 2px;
  ${({ hoverCss }) => hoverCss}
`;

export default VMInputBox;
