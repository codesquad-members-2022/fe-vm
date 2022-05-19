import React from 'react';

import PropTypes from 'prop-types';

import ProductBox from '@components/molecules/ProductBox';
import * as S from '@components/organisms/ProductList/ProductList.style';

const ProductList = ({ products, clickHandler }) => {
  return (
    <S.Container>
      {products.map(product => (
        <ProductBox key={product.id} {...product} clickHandler={clickHandler(product.id)} />
      ))}
    </S.Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  clickHandler: PropTypes.func,
};

export default ProductList;
