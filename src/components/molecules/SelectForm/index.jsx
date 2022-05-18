import React, { useState } from 'react';

import Button, { BUTTON_SIZE, BUTTON_THEME } from '@components/atoms/Button';
import Select from '@components/atoms/Select';
import * as S from '@components/molecules/SelectForm/SelectForm.style';
import money from '@data/money';

export const options = money.map(item => {
  return {
    id: item.id,
    value: item.unit,
    label: `${item.unit}원`,
  };
});

const SelectForm = () => {
  const [selectValue, setSelectValue] = useState(options[0]);

  const isButtonDisabled = money.every(item => !item.quantity);

  const changeSelectValue = selectedId => {
    const selected = options.find(option => option.id === selectedId);
    setSelectValue(selected);
  };

  const putMoney = () => {
    // TODO: 지갑 구현 후 마무리
    console.log(selectValue);
  };

  return (
    <S.Form>
      <Select options={options} selectValue={selectValue} setSelectValue={changeSelectValue} />
      <Button
        theme={BUTTON_THEME.DEFAULT}
        size={BUTTON_SIZE.SMALL}
        disabled={isButtonDisabled}
        onClick={putMoney}
      >
        추가
      </Button>
    </S.Form>
  );
};

export default SelectForm;
