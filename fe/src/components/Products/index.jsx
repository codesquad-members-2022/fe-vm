import React, { memo, useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useProductContext } from 'context/Product';
import { addTargetProduct, getProducts, substractTargetProduct } from 'context/Product/action';
import MangementForm from './MangementForm';
import Product from './Product';
import * as S from './style';

function Products({ isManger, isPriceUnderInputMoney, handleOrderProduct }) {
  const { products, vmDispatch } = useProductContext();
  const [targetProduct, setTargetProduct] = useState(null);

  const handleSelectProduct = useCallback(target => {
    setTargetProduct(target);
  }, []);

  const fetchAddTargetProduct = useCallback(
    id => {
      addTargetProduct(vmDispatch, id);
    },
    [vmDispatch],
  );

  const fetchSubstractTargetProduct = useCallback(
    id => {
      substractTargetProduct(vmDispatch, id);
    },
    [vmDispatch],
  );

  const updateTargetProduct = () => {
    if (!targetProduct) {
      return;
    }
    const newTargetProduct = products.find(product => product.id === targetProduct.id);
    setTargetProduct(newTargetProduct);
  };

  const fetchProducts = async () => {
    getProducts(vmDispatch);
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
            isSelect={targetProduct?.id === product.id} // TODO: 변수로 빼기
            isPriceUnderInputMoney={isPriceUnderInputMoney}
            handleSelectProduct={handleSelectProduct}
            handleOrderProduct={handleOrderProduct}
          />
        ))}
      </S.ProductsGrid>
    </S.Container>
  );
}

Products.propTypes = {
  isManger: PropTypes.bool.isRequired,
  isPriceUnderInputMoney: PropTypes.func.isRequired,
  handleOrderProduct: PropTypes.func.isRequired,
};

export default memo(Products);
