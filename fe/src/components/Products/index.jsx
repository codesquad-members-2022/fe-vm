import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useVMContext } from 'context/VMContext';
import { getProducts } from 'context/VMContext/action';
import Product from './Product';
import * as S from './style';

function Products({ isPriceUnderInsertMoney }) {
  const { products, dispatch } = useVMContext();
  const fetchProducts = async () => {
    getProducts(dispatch);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <S.ProductsContainer>
      {products.map(product => (
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

export default memo(Products);
