import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { changeNumberToKoreanLocaleMoney } from 'utils';
import * as S from './style';

function ChangesUnits({
  totalBalance,
  changesUnits,
  fetchAddTargetBalance,
  fetchSubstractTargetBalance,
}) {
  return (
    <S.ChangesUnitsContainer>
      <div>{changeNumberToKoreanLocaleMoney(totalBalance)}원</div>
      {changesUnits.map(({ id, unit, count }) => (
        <li key={id}>
          <Button variant="contained">{unit}</Button>
          <div>{count}</div>
          <Button variant="contained" onClick={() => fetchAddTargetBalance(id)}>
            +
          </Button>
          <Button variant="contained" onClick={() => fetchSubstractTargetBalance(id)}>
            -
          </Button>
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
  fetchAddTargetBalance: PropTypes.func.isRequired,
  fetchSubstractTargetBalance: PropTypes.func.isRequired,
};

export default memo(ChangesUnits);
