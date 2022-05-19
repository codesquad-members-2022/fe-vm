import PropTypes from 'prop-types';
import React, { useRef } from 'react';

import { ACTION } from '@/constants/actionType';
import { useVendorState, useVendorDispatch } from '@/context/VendorProvider';

import * as S from './CashDisplay.style';

const CashDisplay = ({ isBalance, small }) => {
  const inputRef = useRef(null);
  const { userCash, inputState, insertedCash } = useVendorState();
  const dispatch = useVendorDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const currentCash = Number(inputRef.current.value);

    if (currentCash <= 0) {
      return;
    }

    dispatch({
      type: ACTION.INSERT_CASH,
      payload: {
        currentCash,
      },
    });
  };

  const onChange = ({ target }) => {
    dispatch({
      type: ACTION.INPUT_ON_CHANGE,
      payload: {
        insertedCash: target.value,
      },
    });
  };

  return (
    <>
      {isBalance ? (
        <S.DisplayBox isBalance={isBalance} small={small}>
          <S.MonetaryUnit isBalance={isBalance} small={small}>
            $
          </S.MonetaryUnit>
          <S.Balance small={small}>{userCash.toLocaleString('en-US')}</S.Balance>
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
              value={insertedCash}
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
