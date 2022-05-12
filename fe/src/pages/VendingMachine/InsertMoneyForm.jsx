import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { setKoreanLocaleMoney } from 'utils';
import * as S from './style';

function InsertMoneyForm({
  totalBalance,
  insertMoney,
  onChangeInsertMoney,
  handleSubmitInsertMoney,
}) {
  return (
    <S.InsertMoneyFormContainer>
      <S.InsertMoneyFormBox onSubmit={handleSubmitInsertMoney}>
        <div>
          <input
            type="text"
            name="insertMoney"
            value={setKoreanLocaleMoney(insertMoney)}
            onChange={onChangeInsertMoney}
            placeholder="투입할 금액을 입력하세요."
          />
          <span>원</span>
        </div>
        <Button variant="contained">주문하기</Button>
      </S.InsertMoneyFormBox>
      <div>{setKoreanLocaleMoney(totalBalance)}원</div>
      <ul>
        <h4>log list</h4>
      </ul>
    </S.InsertMoneyFormContainer>
  );
}

InsertMoneyForm.propTypes = {
  totalBalance: PropTypes.number.isRequired,
  insertMoney: PropTypes.number.isRequired,
  onChangeInsertMoney: PropTypes.func.isRequired,
  handleSubmitInsertMoney: PropTypes.func.isRequired,
};

export default memo(InsertMoneyForm);
