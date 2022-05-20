import { useContext, useRef, useState } from 'react';
import styled from 'styled-components';

import { COLORS, TYPOGRAPHY, CASH_UNITS } from 'constants';
import { TimerContext, WalletCashesContext, LogMessagesContext } from 'context';
import { createNextId } from 'util/util';

const OrderForm = () => {
  const { logMessages, setLogMessages } = useContext(LogMessagesContext);
  const { setReturnCashesTimer, clearReturnCashesTimer } = useContext(TimerContext);

  const { cashes, setCashes, totalCash, setTotalCash, totalInputCash, setTotalInputCash } =
    useContext(WalletCashesContext);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  const onChange = event => setInput(Number(event.target.value));
  const onReset = () => setInput('');
  const onFocus = () => inputRef.current.focus();

  const isValidUnit = candidate => {
    if (!CASH_UNITS.includes(candidate)) return false;
    return cashes.every(cash => (!(candidate === cash.unit && cash.count === 0) ? true : false));
  };

  const handleInsertClick = event => {
    event.preventDefault();

    if (!isValidUnit(input)) {
      onReset();
      onFocus();
      return;
    }

    const newCashes = cashes.map(cash =>
      input === cash.unit ? { ...cash, count: cash.count - 1 } : cash,
    );

    clearReturnCashesTimer();
    setReturnCashesTimer(returnInputCashes);

    setTotalCash(totalCash - input);
    setCashes(newCashes);
    setTotalInputCash(totalInputCash + input);
    onReset();
  };

  const handleReturnClick = () => {
    if (totalInputCash === 0) return;

    returnInputCashes('buttonClick');
  };

  const returnInputCashes = (from = 'auto') => {
    clearReturnCashesTimer();

    let restReturnCash = totalInputCash;

    const newCashes = [...cashes].map(cash => {
      const quotient = Math.floor(restReturnCash / cash.unit);

      if (quotient <= 0) return cash;

      restReturnCash -= cash.unit * quotient;
      return { ...cash, count: cash.count + quotient };
    });

    setCashes(newCashes);
    setTotalInputCash(0);
    setTotalCash(totalCash + totalInputCash);

    const newLogMessageType = from === 'buttonClick' ? 'CASH_RETRUNED' : 'CASH_AUTO_RETURNED';
    const newLogId = createNextId(logMessages);
    const newLogMessage = {
      id: newLogId,
      date: new Date(),
      type: newLogMessageType,
      value: restReturnCash,
    };
    setLogMessages(prev => [...prev, newLogMessage]);
  };

  return (
    <OrderFormContainer>
      <InsertInputWrap>
        <input
          type='number'
          value={input}
          placeholder='금액을 입력하세요'
          ref={inputRef}
          onChange={onChange}
        />
        <input type='submit' value='투입하기' onClick={handleInsertClick} />
      </InsertInputWrap>
      <input type='button' value='반환하기' onClick={handleReturnClick} />
    </OrderFormContainer>
  );
};

const OrderFormContainer = styled.form`
  grid-area: OrderForm;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: ${TYPOGRAPHY.SIZE.LARGE};

  input[type='submit'],
  input[type='button'] {
    color: ${COLORS.WHITE};
    background: ${COLORS.BLUE};
    border: none;
    font-weight: ${TYPOGRAPHY.SIZE.MEDIUM};
  }

  input[type='button'] {
    height: 48px;
    border-radius: 12px;
    cursor: pointer;
  }

  input[type='submit'] {
    width: 120px;
    height: 64px;
    border-radius: 0 12px 12px 0;
  }

  input[type='number'] {
    width: calc(100% - 120px);
    height: 64px;
    border: 2px solid ${COLORS.BLUE};
    border-radius: 12px 0 0 12px;
    padding: 0 16px;
  }
`;

const InsertInputWrap = styled.div`
  height: 64px;
`;

export default OrderForm;
