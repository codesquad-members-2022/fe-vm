import React from 'react';
import PropTypes from 'prop-types';
import { StyledMoneyBox } from './MoneyBox.style';
import Button from 'components/atoms/Button/Button';
import Label from 'components/atoms/Label/Label';

const MoneyBox = ({ unit, count, ...props }) => {
  return (
    <StyledMoneyBox flexType={'centerBetween'}>
      <Button sizeType={'large'} borderType={'rounded'} children={unit}></Button>
      <Label flexType={'center'} sizeType={'small'} fontType={'medium'} borderType={'rounded'} children={count}></Label>
    </StyledMoneyBox>
  );
};

MoneyBox.defaultProps = {
  unit: '10원',
  count: '0개',
};

MoneyBox.propTypes = {
  unit: PropTypes.string,
  count: PropTypes.string,
};

export default MoneyBox;