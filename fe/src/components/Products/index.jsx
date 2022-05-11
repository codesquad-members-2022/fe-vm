import React from 'react';
import PropTypes from 'prop-types';
import randomProducts from 'mock/randomProducts';
import Product from './Product';
import * as S from './style';

function Products({ isPriceUnderInsertMoney }) {
  return (
    <S.ProductsContainer>
      {randomProducts.map(product => (
        <Product
          key={product.id}
          productInfo={product}
          isPriceUnderInsertMoney={isPriceUnderInsertMoney}
        />
      ))}
    </S.ProductsContainer>
  );
}

Products.propTypes = {
  isPriceUnderInsertMoney: PropTypes.func.isRequired,
};

export default Products;
