import { getWonTemplate } from '../../../helper/utils';
import {
  StyledUserWindowContainer,
  StyledInputMoneyMonitorWrapper,
  StyledInputMoneyMonitor,
  StyledInputBoxWrapper,
  StyledInputBox,
  StyledRepaymentBtn,
} from './userWindow.styled';
import { useContext } from 'react';
import { InputMoneyContext, LogContext, PaybackTimerContext, ProgressContext } from '../vendingMachine';
import { LogMonitor } from '../userWindowLogMonitor/logMonitor';

export function UserWindow() {
  const { inputMoney, setInputMoney } = useContext(InputMoneyContext);
  const { setLogList } = useContext(LogContext);
  const { inProgress } = useContext(ProgressContext);
  const { paybackTimer, setPaybackTimer } = useContext(PaybackTimerContext);
  const PAYBACK_TIME = 4000;

  function handleKeyPress(e) {
    if (inProgress) return;
    if (e.key !== 'Enter') return;
    const inputValue = e.target.value.replace(',', '');
    const currentInputMoney = parseInt(inputValue / 100) * 100;
    e.target.value = null;

    printInputMoney(currentInputMoney);
    logInputMoney(currentInputMoney);
  }

  function handleInputChange(e) {
    const changedValue = Number(e.target.value.replace(/[^0-9]/g, ''));
    if (changedValue > 0) {
      e.target.value = changedValue.toLocaleString();
    }
  }

  function logInputMoney(currentInputMoney) {
    const log = `${getWonTemplate(currentInputMoney)} 투입됨.`;
    setLogList(logList => [...logList, log]);
  }

  function printInputMoney(currentInputMoney) {
    const setValue = inputMoney + currentInputMoney;
    setInputMoney(setValue);
  }

  function handleClickRepaymentBtn() {
    if (paybackTimer !== null) {
      return;
    }
    const payback = () => {
      setTimeout(() => {
        logPaybackMoney();
        setInputMoney(0);
        setPaybackTimer(null);
      }, PAYBACK_TIME);
    };
    setPaybackTimer(payback());
  }

  function logPaybackMoney() {
    if (inputMoney === 0) return;
    const log = `잔돈 ${getWonTemplate(inputMoney)} 반환됨.`;
    setLogList(logList => [...logList, log]);
  }

  return (
    <StyledUserWindowContainer>
      <StyledInputMoneyMonitorWrapper>
        <p>투입된 금액</p>
        <StyledInputMoneyMonitor>{getWonTemplate(inputMoney)}</StyledInputMoneyMonitor>
      </StyledInputMoneyMonitorWrapper>
      <StyledInputBoxWrapper>
        <StyledInputBox placeholder="금액을 입력하세요." onKeyPress={handleKeyPress} onChange={handleInputChange} />
        <p>(원)</p>
      </StyledInputBoxWrapper>
      <StyledRepaymentBtn onClick={handleClickRepaymentBtn}>반환</StyledRepaymentBtn>
      <LogMonitor />
    </StyledUserWindowContainer>
  );
}
