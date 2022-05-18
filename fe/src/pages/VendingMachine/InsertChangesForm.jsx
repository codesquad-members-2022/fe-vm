import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { changeNumberToKoreanLocaleMoney } from 'utils/global';
import * as S from './style';

function InsertChangesForm({ totalBalance, changesUnits, insertChangeIntoInputMoney }) {
  return (
    <S.InsertChangesContainer>
      <div>{changeNumberToKoreanLocaleMoney(totalBalance)}원</div>
      {changesUnits.map(({ id, unit, count }) => (
        <li key={id}>
          <div>{unit}원 : </div>
          <div>{count}개</div>
          <Button variant="contained" onClick={() => insertChangeIntoInputMoney(id)}>
            투입
          </Button>
        </li>
      ))}
    </S.InsertChangesContainer>
  );
}

InsertChangesForm.propTypes = {
  totalBalance: PropTypes.number.isRequired,
  changesUnits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      unit: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
  ).isRequired,
  insertChangeIntoInputMoney: PropTypes.func.isRequired,
};

export default InsertChangesForm;
