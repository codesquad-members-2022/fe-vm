import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';

function ErrorFallback({ error, resetErrorBoundary, Wrapper }) {
  return (
    <Wrapper role="alert">
      <pre>{error.errorMessage}</pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </Wrapper>
  );
}

ErrorFallback.propTypes = {
  error: PropTypes.shape({
    errorMessage: PropTypes.string,
  }).isRequired,
  resetErrorBoundary: PropTypes.func.isRequired,
  Wrapper: PropTypes.element.isRequired,
};

export default ErrorFallback;
