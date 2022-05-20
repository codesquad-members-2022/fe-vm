import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import * as S from './style';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <S.ChangesUnitsContainer role="alert">
      <p>Something went wrong:</p>
      <pre>{error.errorMessage}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </S.ChangesUnitsContainer>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    errorMessage: PropTypes.string,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
};

export default ErrorFallback;
