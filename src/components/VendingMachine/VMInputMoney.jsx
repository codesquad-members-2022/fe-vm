import { useContext, useState } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import { calcWalletMoney } from 'common/vmServices';
import VMInputBox from 'components/VendingMachine/VMInputBox';
import COLORS from 'constants/colors';
import { CountContext } from 'context/CountProvider';
import { MoneyContext } from 'context/MoneyProvider';
import createHoverCss from 'styles/createHoverCss';

const VMInputMoney = () => {
  const { moneyState, insertInputMoney } = useContext(MoneyContext);
  const [, setLastCountTime] = useContext(CountContext);
  const { inputMoney } = moneyState;

  const [isRetrying, setIsRetrying] = useState(false);
  const [isInputSelected, setIsInputSelected] = useState(false);
  const hoverCss = createHoverCss({
    bgColor: { base: COLORS.WHITE, hover: COLORS.MAIN_BG },
  });

  const handleClickTextBox = () => {
    setIsInputSelected(true);
  };

  const updateInputMoney = (newMoney) => {
    if (newMoney <= inputMoney) {
      setIsRetrying(true);
      return;
    }
    const newState = calcWalletMoney({
      targetMoney: +newMoney,
      ...moneyState,
    });
    insertInputMoney(newState);
    setLastCountTime(new Date());
    setIsInputSelected(false);
    setIsRetrying(false);
  };

  return (
    <VMInputMoneyWrapper>
      {isInputSelected ? (
        <>
          <VMInputBox
            defaultInput={inputMoney}
            isRetrying={isRetrying}
            updateInputMoney={updateInputMoney}
          />
          {isRetrying && (
            <RetrySpan>현재 금액보다 큰 금액을 넣어주세요</RetrySpan>
          )}
        </>
      ) : (
        <TextBox onClick={handleClickTextBox} hoverCss={hoverCss}>
          <span>{parseMoneyFormat(inputMoney)}</span>
        </TextBox>
      )}
    </VMInputMoneyWrapper>
  );
};

const VMInputMoneyWrapper = styled.div`
  position: relative;
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

const RetrySpan = styled.span`
  position: absolute;
  font-size: 0.1rem;
  bottom: 1.6em;
  left: 30em;
`;

export default VMInputMoney;
