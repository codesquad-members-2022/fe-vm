import React from 'react';

import PropTypes from 'prop-types';

import Button, { BUTTON_SIZE } from '@components/atoms/Button';
import TextBox from '@components/atoms/TextBox';
import * as S from '@components/molecules/MoneyCounter/MoneyCounter.style';

const MoneyCounter = ({ money, changeMoneyQuantity }) => {
  const isButtonDisabled = !money.quantity;

  return (
    <S.Container>
      <Button size={BUTTON_SIZE.LARGE} disabled={isButtonDisabled} onClick={changeMoneyQuantity}>
        {`${money.unit}원`}
      </Button>
      <TextBox text={`${money.quantity}개`} />
    </S.Container>
  );
};

MoneyCounter.propTypes = {
  money: PropTypes.object,
  changeMoneyQuantity: PropTypes.func,
};

export default MoneyCounter;
