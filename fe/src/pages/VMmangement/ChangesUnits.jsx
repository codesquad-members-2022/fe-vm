import React from 'react';
import { useErrorHandler } from 'react-error-boundary';
import { useUserContext } from 'context/User';
import { addTargetBalance, substractTargetBalance } from 'context/User/action';
import userApi from 'api/user';
import { changeNumberToKoreanLocaleMoney } from 'utils/global';
import { Button } from '@mui/material';
import * as S from './style';

function ChangesUnits() {
  const { totalBalance, changesUnits, userDispatch } = useUserContext();
  const handleError = useErrorHandler();
  const fetchAddTargetBalance = id =>
    userApi
      .addTargetBalance(id)
      .then(response => addTargetBalance(userDispatch, response.data), handleError);

  const fetchSubstractTargetBalance = id =>
    userApi
      .substractTargetBalance(id)
      .then(response => substractTargetBalance(userDispatch, response.data), handleError);

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

export default ChangesUnits;
