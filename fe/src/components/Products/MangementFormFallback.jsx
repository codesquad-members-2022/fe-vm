import React from 'react';
import PropTypes from 'prop-types';
import ErrorFallback from 'hoc/Fallback';
import * as S from './style';

function MangementFormFallback({ error, resetErrorBoundary }) {
  return (
    <ErrorFallback
      error={error}
      resetErrorBoundary={resetErrorBoundary}
      Wrapper={S.MangementForm}
    />
  );
}

MangementFormFallback.propTypes = {
  error: PropTypes.shape({
    errorMessage: PropTypes.string,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default MangementFormFallback;
