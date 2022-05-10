import { useContext, useState } from 'react';
import styled from 'styled-components';

import VMInputBox from 'components/VendingMachine/VMInputBox';
import COLORS from 'constants/colors';
import { MoneyContext } from 'context/MoneyProvider';

const VMInputMoney = ({ insertVMLog }) => {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleClickTextBox = () => {
    setIsInputSelected(true);
  };

  const updateInputMoney = (newMoney) => {
    // TODO: 현재 InputMoney 보다 작게 넣는다면 false
    setInputMoney(newMoney);
    setIsInputSelected(false);
    insertVMLog({
      type: 'insert',
      data: newMoney - inputMoney,
    });
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
