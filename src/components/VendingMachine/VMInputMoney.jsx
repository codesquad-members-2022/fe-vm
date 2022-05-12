import { useContext, useState } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import VMInputBox from 'components/VendingMachine/VMInputBox';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';

const VMInputMoney = () => {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const [, insertLog] = useContext(LogContext);
  const [isInputSelected, setIsInputSelected] = useState(false);

  const handleClickTextBox = () => {
    setIsInputSelected(true);
  };

  const updateInputMoney = (newMoney) => {
    if (newMoney <= inputMoney) {
      // TODO: 현재 InputMoney 보다 작게 넣는다면 false
      // 다시 시도하게 코드 조정
      setIsInputSelected(false);
      return;
    }
    // newMoney 알고리즘
    setInputMoney(+newMoney);
    setIsInputSelected(false);
    insertLog({
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
        <TextBox onClick={handleClickTextBox}>
          {parseMoneyFormat(inputMoney)}
        </TextBox>
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
