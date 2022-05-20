import React, { memo, Suspense, useMemo } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import PropTypes from 'prop-types';
import productApi from 'api/product';
import suspenseFetcher from 'api/suspenseFetcher';
import MangementForm from './MangementForm';
import ProductsGrid from './ProductsGrid';
import ProductFallback from './ProductFallback';
import * as S from './style';

function Products({ isManger, canSelectContidition, handleClickTriggerOrder }) {
  const suspensProducts = useMemo(
    () =>
      suspenseFetcher({
        axiosInstance: productApi.getProducts,
        params: null,
        option: null,
      }),
    [],
  );

  return (
    <S.Container>
      <ErrorBoundary FallbackComponent={ProductFallback}>
        {isManger && <MangementForm />}
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ProductFallback}>
        <Suspense fallback={<h1>loading...</h1>}>
          <ProductsGrid
            resource={suspensProducts}
            isManger={isManger}
            canSelectContidition={canSelectContidition}
            handleClickTriggerOrder={handleClickTriggerOrder}
          />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
}

Products.propTypes = {
  isManger: PropTypes.bool.isRequired,
  canSelectContidition: PropTypes.func.isRequired,
  handleClickTriggerOrder: PropTypes.func.isRequired,
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
