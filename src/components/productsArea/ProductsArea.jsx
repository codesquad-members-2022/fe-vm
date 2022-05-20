import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'components/productsArea/ProductsArea.style';
import productsData from 'data/products';
import Product from 'components/productsArea/Product';

export default function ProductsArea({ toggleSelectableStatus }) {
  return (
    <Container>
      {productsData.map(productInfo => (
        <Product key={productInfo.id} productInfo={productInfo} toggleSelectableStatus={toggleSelectableStatus} />
      ))}
    </Container>
  );
}

ProductsArea.propTypes = {
  toggleSelectableStatus: PropTypes.func
};

ProductsArea.defaultProps = {
  toggleSelectableStatus: () => {}
};
