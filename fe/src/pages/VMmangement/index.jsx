import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import ProductFallback from 'components/Products/ProductFallback';
import ChangeUnitFallback from './ChangeUnitFallback';
import * as S from './style';

function VMmangement() {
  return (
    <S.Container>
      <ErrorBoundary FallbackComponent={ProductFallback}>
        <Products
          isManger
          isPriceUnderInputMoney={() => {}}
          handleClickTriggerOrder={() => {}}
          targetProduct={null}
          handleSelectProduct={() => {}}
        />
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ChangeUnitFallback}>
        <ChangesUnits />
      </ErrorBoundary>
    </S.Container>
  );
}

export default VMmangement;
