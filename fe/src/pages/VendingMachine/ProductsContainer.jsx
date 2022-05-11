import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import randomProducts from 'mock/randomProducts';
import Product from './Product';
import * as S from './style';

function ProductsContainer({ insertMoney }) {
  const isPriceUnderInsertMoney = useCallback(
    targetPrice => {
      return targetPrice <= insertMoney;
    },
    [insertMoney],
  );
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

ProductsContainer.propTypes = {
  insertMoney: PropTypes.number.isRequired,
};

export default ProductsContainer;
