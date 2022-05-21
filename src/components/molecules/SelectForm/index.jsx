import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Button, { BUTTON_SIZE, BUTTON_THEME } from '@components/atoms/Button';
import Select from '@components/atoms/Select';
import * as S from '@components/molecules/SelectForm/SelectForm.style';
import money from '@data/money';

const SelectForm = ({ options, onClick }) => {
  const [selectValue, setSelectValue] = useState(options[0]);

  const isButtonDisabled = money.every(item => !item.quantity);

  const changeSelectValue = selectedId => {
    const selected = options.find(option => option.id === selectedId);
    setSelectValue(selected);
  };

  return (
    <S.Form>
      <Select options={options} selectValue={selectValue} setSelectValue={changeSelectValue} />
      <Button
        theme={BUTTON_THEME.DEFAULT}
        size={BUTTON_SIZE.SMALL}
        disabled={isButtonDisabled}
        onClick={onClick(selectValue.id)}
      >
        추가
      </Button>
    </S.Form>
  );
};

SelectForm.propTypes = {
  options: PropTypes.array,
  onClick: PropTypes.func,
};

export default SelectForm;
