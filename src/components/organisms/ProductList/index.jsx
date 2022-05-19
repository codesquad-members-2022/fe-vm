import React from 'react';

import PropTypes from 'prop-types';

import ProductBox from '@components/molecules/ProductBox';
import * as S from '@components/organisms/ProductList/ProductList.style';

const ProductList = ({ products, changeProductQuantity }) => {
  return (
    <S.Container>
      {products.map(product => (
        <ProductBox
          key={product.id}
          {...product}
          changeProductQuantity={changeProductQuantity(product.id)}
        />
      ))}
    </S.Container>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  changeProductQuantity: PropTypes.func,
};

export default ProductList;
