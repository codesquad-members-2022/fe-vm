import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label/Label';
import Button from 'components/atoms/Button/Button';
import { StyledProductBox } from './ProductBox.style';

const ProductBox = ({ icon, cost, ...props }) => {
  return (
    <StyledProductBox flexType="centerAround" borderType="rounded">
      <Label flexType="center" sizeType="medium" fontType="logo" borderType="none">
        {icon}
      </Label>
      <Button sizeType="thin" borderType="rounded" colorType="active">
        {cost}
      </Button>
    </StyledProductBox>
  );
};

ProductBox.defaultProps = {
  icon: '❌',
  cost: 'Empty',
};

ProductBox.propTypes = {
  icon: PropTypes.string,
  cost: PropTypes.string,
};

export default ProductBox;