import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { changeNumberToKoreanLocaleMoney } from 'utils/global';
import * as S from './style';

const INSERT_FORM_ID = 'insert-form';

function InputMoneyForm({
  inputMoney,
  onChangeInputMoney,
  handleSubmitInputMoney,
  handleClickReturnChanges,
}) {
  const inputNumber = inputMoney === 0 ? '' : changeNumberToKoreanLocaleMoney(inputMoney);
  return (
    <>
      <S.InputMoneyFormBox onSubmit={handleSubmitInputMoney} id={INSERT_FORM_ID}>
        <div>
          <input
            type="text"
            name="inputMoney"
            value={inputNumber}
            onChange={onChangeInputMoney}
            placeholder="투입할 금액을 입력하세요."
          />
          <span>원</span>
        </div>
      </S.InputMoneyFormBox>
      <S.Buttons>
        <Button variant="contained" form={INSERT_FORM_ID} type="submit">
          금액 투입
        </Button>
        <Button variant="contained" onClick={handleClickReturnChanges}>
          잔돈반환하기
        </Button>
      </S.Buttons>
    </>
  );
}

InputMoneyForm.propTypes = {
  inputMoney: PropTypes.number.isRequired,
  onChangeInputMoney: PropTypes.func.isRequired,
  handleSubmitInputMoney: PropTypes.func.isRequired,
  handleClickReturnChanges: PropTypes.func.isRequired,
};

export default memo(InputMoneyForm);
