import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import ChangeUnitFallback from './ChangeUnitFallback';
import * as S from './style';

function VMmangement() {
  return (
    <S.Container>
      <Products isManger canSelectContidition={() => {}} handleClickTriggerOrder={() => {}} />
      <ErrorBoundary FallbackComponent={ChangeUnitFallback}>
        <ChangesUnits />
      </ErrorBoundary>
    </S.Container>
  );
}

export default VMmangement;
