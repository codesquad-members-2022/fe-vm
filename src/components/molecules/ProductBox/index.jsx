import React from 'react';
import PropTypes from 'prop-types';
import Label from 'components/atoms/Label';
import Button from 'components/atoms/Button';
import * as Styled from 'components/molecules/ProductBox/ProductBox.style';

const ProductBox = ({ icon, cost, ...props }) => {
  return (
    <Styled.ProductBox flexType="centerAround" borderType="rounded">
      <Label flexType="center" sizeType="medium" fontType="logo" borderType="none">
        {icon}
      </Label>
      <Button sizeType="thin" borderType="rounded" colorType="active">
        {cost}
      </Button>
    </Styled.ProductBox>
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
