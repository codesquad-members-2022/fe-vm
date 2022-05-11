import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { setKoreanLocaleMoney } from 'utils';
import * as S from './style';

function ChangesUnits({ totalBalance, changesUnits, substactBalance }) {
  const handleClickUnit = useCallback(
    unit => {
      const targetUnit = changesUnits.find(unitElement => unitElement.unit === unit);
      if (targetUnit.count <= 0) {
        alert('잔고가 없어요');
        return;
      }
      substactBalance(unit);
    },
    [changesUnits, substactBalance],
  );

  return (
    <S.ChangesUnitsContainer>
      <div>{setKoreanLocaleMoney(totalBalance)}원</div>
      {changesUnits.map(({ id, unit, count }) => (
        <li key={id}>
          <Button variant="contained" onClick={() => handleClickUnit(unit)}>
            {unit}
          </Button>
          <div>{count}</div>
        </li>
      ))}
    </S.ChangesUnitsContainer>
  );
}

ChangesUnits.propTypes = {
  totalBalance: PropTypes.number.isRequired,
  changesUnits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      unit: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
  substactBalance: PropTypes.func.isRequired,
};

export default ChangesUnits;
