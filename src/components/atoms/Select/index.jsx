import React, { useState } from 'react';

import PropTypes from 'prop-types';

import Icon, { ICON_NAME } from '@components/atoms/Icon';
import * as S from '@components/atoms/Select/Select.style';

const Select = ({ selectValue, setSelectValue, options }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const iconName = isSelectOpen ? ICON_NAME.SELECT_OPEN : ICON_NAME.SELECT_CLOSE;
  const selected = option => option === selectValue;

  const changeSelectValue = event => {
    const selectedId = Number(event.target.dataset.id);
    setSelectValue(selectedId);
    toggleSelect();
  };

  const toggleSelect = () => setIsSelectOpen(prevState => !prevState);

  return (
    <>
      <S.SelectContainer>
        <S.SelectBox onClick={toggleSelect}>
          <S.Value>{selectValue.label}</S.Value>
          <Icon iconName={iconName} />
        </S.SelectBox>
        {isSelectOpen && (
          <S.Select>
            {options.map(option => (
              <S.Option
                key={option.id}
                data-id={option.id}
                onClick={changeSelectValue}
                selected={selected(option)}
              >
                {option.label}
              </S.Option>
            ))}
          </S.Select>
        )}
      </S.SelectContainer>
    </>
  );
};

Select.propTypes = {
  selectValue: PropTypes.object,
  setSelectValue: PropTypes.func,
  options: PropTypes.array,
};

export default Select;
