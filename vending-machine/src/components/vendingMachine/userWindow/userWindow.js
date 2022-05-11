import { getWonTemplate } from '../../../helper/utils';
import {
  StyledUserWindowContainer,
  StyledInputMoneyMonitorWrapper,
  StyledInputMoneyMonitor,
  StyledInputBox,
  StyledRepaymentBtn,
} from './userWindow.styled';
import { useContext } from 'react';
import { InputMoneyContext } from '../vendingMachine';

export function UserWindow() {
  const { inputMoney, setInputMoney } = useContext(InputMoneyContext);

  function handleKeyPress(e) {
    if (e.key !== 'Enter') return;
    printInputMoney(e);
  }

  function printInputMoney(e) {
    const inputValue = parseInt(e.target.value / 100) * 100;
    const setValue = inputMoney + inputValue;
    e.target.value = null;
    setInputMoney(setValue);
  }

  function repaymentMoney() {
    setInputMoney(0);
  }

  return (
    <StyledUserWindowContainer>
      <StyledInputMoneyMonitorWrapper>
        <p>투입된 금액</p>
        <StyledInputMoneyMonitor>{getWonTemplate(inputMoney)}</StyledInputMoneyMonitor>
      </StyledInputMoneyMonitorWrapper>
      <StyledInputBox placeholder="금액을 입력하세요." onKeyPress={handleKeyPress}></StyledInputBox>
      <StyledRepaymentBtn onClick={repaymentMoney}>반환</StyledRepaymentBtn>
      {/*<LogMonitor></LogMonitor>*/}
    </StyledUserWindowContainer>
  );
}
