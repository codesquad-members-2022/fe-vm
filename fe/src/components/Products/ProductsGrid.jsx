import React, { memo, useCallback, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useProductContext } from 'context/Product';
import { getProducts, selectProduct } from 'context/Product/action';
import { useUserContext } from 'context/User';
import { getSumInsertMoney } from 'utils/vendingMachine';
import * as S from './style';
import Product from './Product';

function ProductsGrid({ resource, isManger, handleClickTriggerOrder }) {
  const data = resource.read();

  const { products, targetProduct, productDispatch } = useProductContext();
  const { prevInputChanges } = useUserContext();
  const newInputSum = getSumInsertMoney(prevInputChanges);

  const checkCanOrder = useCallback(price => newInputSum >= price, [newInputSum]);

  useLayoutEffect(() => {
    getProducts(productDispatch, data);
  }, [data, productDispatch]);

  const handleSelectProduct = useCallback(
    target => {
      selectProduct(productDispatch, { targetProduct: target });
    },
    [productDispatch],
  );

  return (
    <S.ProductsGrid>
      {products.map(product => {
        const canBuy = checkCanOrder(product.price);
        return (
          <Product
            key={product.id}
            productInfo={product}
            isManger={isManger}
            isSelect={targetProduct?.id === product.id}
            canBuy={canBuy}
            handleSelectProduct={handleSelectProduct}
            handleClickTriggerOrder={handleClickTriggerOrder}
          />
        );
      })}
    </S.ProductsGrid>
  );
}

ProductsGrid.propTypes = {
  resource: PropTypes.shape({
    read: PropTypes.func.isRequired,
  }).isRequired,
  isManger: PropTypes.bool.isRequired,
  handleClickTriggerOrder: PropTypes.func.isRequired,
};

export default memo(ProductsGrid);
