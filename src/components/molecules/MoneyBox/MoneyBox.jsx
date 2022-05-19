import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from 'components/molecules/MoneyBox/MoneyBox.style';
import Button from 'components/atoms/Button/Button';
import Label from 'components/atoms/Label/Label';

const MoneyBox = ({ unit, count, ...props }) => {
  return (
    <Styled.MoneyBox flexType={'centerBetween'}>
      <Button sizeType="xLarge" borderType="rounded" fontType="large">
        {unit}
      </Button>
      <Label flexType="center" sizeType="small" fontType="medium" borderType="rounded">
        {count} 개
      </Label>
    </Styled.MoneyBox>
  );
};

MoneyBox.defaultProps = {
  unit: '10원',
  count: '0',
};

MoneyBox.propTypes = {
  unit: PropTypes.string,
  count: PropTypes.number,
};

export default MoneyBox;
