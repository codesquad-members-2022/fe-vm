import React from 'react';

import Button, { BUTTON_SIZE } from '@components/atoms/Button';
import TextBox from '@components/atoms/TextBox';
import * as S from '@components/molecules/MoneyCounter/MoneyCounter.style';

const MoneyCounter = ({ money, putMoney }) => {
  const isButtonDisabled = !money.quantity;

  return (
    <S.Container>
      <Button
        size={BUTTON_SIZE.LARGE}
        disabled={isButtonDisabled}
        onClick={() => putMoney(money.id)}
      >
        {`${money.unit}원`}
      </Button>
      <TextBox text={`${money.quantity}개`} />
    </S.Container>
  );
};

export default MoneyCounter;
