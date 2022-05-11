import { getWonTemplate } from '../../../helper/utils';
import {
  StyledUserWindowContainer,
  StyledInputMoneyMonitorWrapper,
  StyledInputMoneyMonitor,
  StyledInputBox,
  StyledRepaymentBtn,
} from './userWindow.styled';
import { useContext } from 'react';
import { InputMoneyContext, LogContext } from '../vendingMachine';
import { LogMonitor } from '../userWindow_logMonitor/logMonitor';

export function UserWindow() {
  const { inputMoney, setInputMoney } = useContext(InputMoneyContext);
  const { logList, setLogList } = useContext(LogContext);

  function handleKeyPress(e) {
    if (e.key !== 'Enter') return;
    const currentInputMoney = parseInt(e.target.value / 100) * 100;
    e.target.value = null;

    printInputMoney(currentInputMoney);
    logInputMoney(currentInputMoney);
  }

  function logInputMoney(currentInputMoney) {
    const log = `${getWonTemplate(currentInputMoney)} 투입됨.`;
    logList.push(log);
    setLogList(logList);
  }

  function printInputMoney(currentInputMoney) {
    const setValue = inputMoney + currentInputMoney;
    setInputMoney(setValue);
  }

  function handleClickRepaymentBtn() {
    setInputMoney(0);
    logPaybackMoney();
  }

  function logPaybackMoney() {
    const log = `잔돈 ${getWonTemplate(inputMoney)} 반환됨.`;
    logList.push(log);
    setLogList(logList);
  }

  return (
    <StyledUserWindowContainer>
      <StyledInputMoneyMonitorWrapper>
        <p>투입된 금액</p>
        <StyledInputMoneyMonitor>{getWonTemplate(inputMoney)}</StyledInputMoneyMonitor>
      </StyledInputMoneyMonitorWrapper>
      <StyledInputBox placeholder="금액을 입력하세요." onKeyPress={handleKeyPress} />
      <StyledRepaymentBtn onClick={handleClickRepaymentBtn}>반환</StyledRepaymentBtn>
      <LogMonitor />
    </StyledUserWindowContainer>
  );
}
