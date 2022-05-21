import React from 'react';
import PropTypes from 'prop-types';
import ErrorFallback from 'hoc/Fallback';
import * as S from './style';

function ProductFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} Wrapper={S.Container} />
  );
}

ProductFallback.propTypes = {
  error: PropTypes.shape({
    errorMessage: PropTypes.string,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ProductFallback;
