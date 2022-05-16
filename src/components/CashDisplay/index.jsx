import PropTypes from 'prop-types';
import React from 'react';

import * as S from './CashDisplay.style';

const CashDisplay = ({ isBalance, small, balance = 0 }) => {
  return (
    <>
      {isBalance ? (
        <S.DisplayBox isBalance={isBalance} small={small}>
          <S.MonetaryUnit isBalance={isBalance} small={small}>
            $
          </S.MonetaryUnit>
          <S.Balance small={small}>{balance}</S.Balance>
        </S.DisplayBox>
      ) : (
        <S.DisplayBox>
          <S.MonetaryUnit>$</S.MonetaryUnit>
          <S.CashInput type="number" />
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
