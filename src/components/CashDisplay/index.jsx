import PropTypes from 'prop-types';
import React, { useContext, useRef } from 'react';

import { INPUT_STATE } from '@/constants/constants';
import { VendorContext } from '@/context/VendorProvider';

import * as S from './CashDisplay.style';

const CashDisplay = ({ isBalance, small }) => {
  const inputRef = useRef(null);
  const {
    balance,
    setBalance,
    userLog,
    setUserLog,
    userBalance,
    setUserBalance,
    inputState,
    setInputState,
    input,
    setInput,
  } = useContext(VendorContext);

  const handleSubmit = e => {
    e.preventDefault();
    const currentCash = Number(inputRef.current.value);

    if (currentCash <= 0) {
      return;
    }
    if (currentCash > balance) {
      setInputState(INPUT_STATE.warning);
      setUserLog([...userLog, `🚫You don't have enough money`]);
      return;
    }
    setUserBalance(+userBalance + currentCash);
    setInputState(INPUT_STATE.active);
    setBalance(balance - currentCash);
    setUserLog([
      ...userLog,
      `🪙Input $${currentCash}`,
      `💳Your Balance: ${+userBalance + currentCash}`,
    ]);
  };

  const onChange = ({ target }) => {
    setInput(target.value.replace(/(^0+)/, ''));
  };

  return (
    <>
      {isBalance ? (
        <S.DisplayBox isBalance={isBalance} small={small}>
          <S.MonetaryUnit isBalance={isBalance} small={small}>
            $
          </S.MonetaryUnit>
          <S.Balance small={small}>{balance.toLocaleString('en-US')}</S.Balance>
        </S.DisplayBox>
      ) : (
        <S.DisplayBox inputState={inputState}>
          <S.MonetaryUnit>$</S.MonetaryUnit>
          <S.CashForm onSubmit={handleSubmit}>
            <S.CashInput
              type="number"
              ref={inputRef}
              min={0}
              max={99999}
              value={input}
              onChange={onChange}
            />
          </S.CashForm>
        </S.DisplayBox>
      )}
    </>
  );
};

CashDisplay.propTypes = {
  isBalance: PropTypes.bool,
  small: PropTypes.bool,
  balance: PropTypes.number,
};

export default CashDisplay;
