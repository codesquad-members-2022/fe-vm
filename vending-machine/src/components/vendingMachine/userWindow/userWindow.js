import { getWonTemplate } from '../../../helper/utils';
import {
  StyledUserWindowContainer,
  StyledInputMoneyMonitorWrapper,
  StyledInputMoneyMonitor,
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

  // useEffect(() => {
  //   if (!paybackState) return;
  //   console.log('잔돈 반환용 useEffect');
  //   setPaybackState(false);
  //
  //   const timer = setTimeout(() => {
  //     logPaybackMoney();
  //     setInputMoney(0);
  //   }, PAYBACK_TIME);
  //
  //   // return () => {
  //   //   console.log('clear');
  //   //   clearTimeout(timer);
  //   // };
  // }, [paybackState]);

  function handleKeyPress(e) {
    if (inProgress) return;
    if (e.key !== 'Enter') return;
    const currentInputMoney = parseInt(e.target.value / 100) * 100;
    e.target.value = null;

    printInputMoney(currentInputMoney);
    logInputMoney(currentInputMoney);
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
      <StyledInputBox placeholder="금액을 입력하세요." onKeyPress={handleKeyPress} />
      <StyledRepaymentBtn onClick={handleClickRepaymentBtn}>반환</StyledRepaymentBtn>
      <LogMonitor />
    </StyledUserWindowContainer>
  );
}
