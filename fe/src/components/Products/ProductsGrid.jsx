import React, { memo, useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useProductContext } from 'context/Product';
import { getProducts, selectProduct } from 'context/Product/action';
import * as S from './style';
import Product from './Product';

function ProductsGrid({ resource, isManger, canSelectContidition, handleClickTriggerOrder }) {
  const { products, targetProduct, productDispatch } = useProductContext();
  const data = resource.read();

  useLayoutEffect(() => {
    getProducts(productDispatch, data);
  }, []);

  const handleSelectProduct = useCallback(
    target => {
      selectProduct(productDispatch, { targetProduct: target });
    },
    [productDispatch],
  );

  return (
    <S.ProductsGrid>
      {products.map(product => (
        <Product
          key={product.id}
          productInfo={product}
          isManger={isManger}
          isSelect={targetProduct?.id === product.id}
          canSelectContidition={canSelectContidition}
          handleSelectProduct={handleSelectProduct}
          handleClickTriggerOrder={handleClickTriggerOrder}
        />
      ))}
    </S.ProductsGrid>
  );
}

ProductsGrid.propTypes = {
  resource: PropTypes.shape({
    read: PropTypes.func.isRequired,
  }).isRequired,
  isManger: PropTypes.bool.isRequired,
  canSelectContidition: PropTypes.func.isRequired,
  handleClickTriggerOrder: PropTypes.func.isRequired,
};

export default memo(ProductsGrid);
