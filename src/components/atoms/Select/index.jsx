import { useState } from 'react';

import PropTypes from 'prop-types';

import Icon, { ICON_NAME } from '@components/atoms/Icon';
import * as S from '@components/atoms/Select/Select.style';

const Select = ({ defaultValue, setDefaultValue, options }) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const iconName = isSelectOpen ? ICON_NAME.SELECT_OPEN : ICON_NAME.SELECT_CLOSE;
  const selected = value => value === defaultValue;

  const changeValue = event => {
    const selected = event.target.innerText;
    setDefaultValue(selected);
  };

  const toggleSelect = () => setIsSelectOpen(prevState => !prevState);

  return (
    <>
      <S.SelectContainer>
        <S.SelectBox onClick={toggleSelect}>
          <S.Value>{defaultValue}</S.Value>
          <Icon iconName={iconName} />
        </S.SelectBox>
        {isSelectOpen && (
          <S.Select>
            {options.map(({ id, label, value }) => (
              <S.Option
                key={id}
                data-value={value}
                onClick={changeValue}
                selected={selected(label)}
              >
                {label}
              </S.Option>
            ))}
          </S.Select>
        )}
      </S.SelectContainer>
    </>
  );
};

Select.propTypes = {
  defaultValue: PropTypes.string,
  setDefaultValue: PropTypes.func,
  options: PropTypes.array,
};

export default Select;
