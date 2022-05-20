import React, { memo, useCallback, useEffect } from 'react';
import { useErrorHandler } from 'react-error-boundary';
import PropTypes from 'prop-types';
import { useProductContext } from 'context/Product';
import { addTargetProduct, getProducts, substractTargetProduct } from 'context/Product/action';
import productApi from 'api/product';
import MangementForm from './MangementForm';
import Product from './Product';
import * as S from './style';

function Products({
  isManger,
  isPriceUnderInputMoney,
  handleClickTriggerOrder,
  targetProduct,
  handleSelectProduct,
}) {
  const { products, productDispatch } = useProductContext();
  const handleError = useErrorHandler();

  const fetchAddTargetProduct = useCallback(
    id => {
      productApi
        .addTargetProduct(id)
        .then(response => addTargetProduct(productDispatch, response.data), handleError);
    },
    [handleError, productDispatch],
  );

  const fetchSubstractTargetProduct = useCallback(
    id => {
      productApi
        .substractTargetProduct(id)
        .then(response => substractTargetProduct(productDispatch, response.data), handleError);
    },
    [handleError, productDispatch],
  );

  const updateTargetProduct = () => {
    if (!targetProduct) {
      return;
    }
    const newTargetProduct = products.find(product => product.id === targetProduct.id);
    handleSelectProduct(newTargetProduct);
  };

  const fetchProducts = () => {
    productApi
      .getProducts()
      .then(response => getProducts(productDispatch, response.data), handleError);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    updateTargetProduct();
  }, [products]);

  return (
    <S.Container>
      {isManger && (
        <MangementForm
          targetProduct={targetProduct}
          fetchAddTargetProduct={fetchAddTargetProduct}
          fetchSubstractTargetProduct={fetchSubstractTargetProduct}
        />
      )}
      <S.ProductsGrid>
        {products.map(product => (
          <Product
            key={product.id}
            productInfo={product}
            isManger={isManger}
            isSelect={targetProduct?.id === product.id} // TODO: 변수로 빼기
            isPriceUnderInputMoney={isPriceUnderInputMoney}
            handleSelectProduct={handleSelectProduct}
            handleClickTriggerOrder={handleClickTriggerOrder}
          />
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
}

Products.propTypes = {
  isManger: PropTypes.bool.isRequired,
  isPriceUnderInputMoney: PropTypes.func.isRequired,
  handleClickTriggerOrder: PropTypes.func.isRequired,
  handleSelectProduct: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  targetProduct: PropTypes.shape({
    id: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ea: PropTypes.number.isRequired,
  }),
};

export default memo(Products);
