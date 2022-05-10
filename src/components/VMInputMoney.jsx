import { useState } from 'react';
import styled from 'styled-components';

import COLORS from 'constants/colors';

import VMInputBox from './VMInputBox';

const VMInputMoney = () => {
  const [inputMoney, setInputMoney] = useState(500);
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleClickTextBox = () => {
    setIsInputSelected(true);
  };

  const updateInputMoney = (newMoney) => {
    setInputMoney(newMoney);
    setIsInputSelected(false);
  };

  return (
    <VMInputMoneyWrapper>
      {isInputSelected ? (
        <VMInputBox
          defaultInput={inputMoney}
          updateInputMoney={updateInputMoney}
        />
      ) : (
        <TextBox onClick={handleClickTextBox}>{inputMoney} 원</TextBox>
      )}
    </VMInputMoneyWrapper>
  );
};

const VMInputMoneyWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  padding: 0px 10px;
  border: 3px solid ${COLORS.GREY};
`;

const TextBox = styled.span``;

export default VMInputMoney;
