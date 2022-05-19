import { useContext, useState } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import { calcWalletMoney } from 'common/vmServices';
import VMInputBox from 'components/VendingMachine/VMInputBox';
import COLORS from 'constants/colors';
import { LogContext } from 'context/LogProvider';
import { MoneyContext } from 'context/MoneyProvider';
import createHoverCss from 'styles/createHoverCss';

const VMInputMoney = () => {
  const [, insertLog] = useContext(LogContext);
  const { moneyState, insertInputMoney } = useContext(MoneyContext);
  const { inputMoney } = moneyState;

  const [isInputSelected, setIsInputSelected] = useState(false);
  const hoverCss = createHoverCss({
    bgColor: { base: COLORS.WHITE, hover: COLORS.MAIN_BG },
  });

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
    const newState = calcWalletMoney({
      targetMoney: +newMoney,
      ...moneyState,
    });
    console.log(newState);
    insertInputMoney(newState);
    insertLog({
      type: 'insert',
      data: newState.inputMoney - moneyState.inputMoney,
    });
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
        <TextBox onClick={handleClickTextBox} hoverCss={hoverCss}>
          <span>{parseMoneyFormat(inputMoney)}</span>
        </TextBox>
      )}
    </VMInputMoneyWrapper>
  );
};

const VMInputMoneyWrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  border: 3px solid ${COLORS.GREY};
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  padding: 0px 10px;
  cursor: pointer;
  ${({ hoverCss }) => hoverCss};
`;

export default VMInputMoney;
