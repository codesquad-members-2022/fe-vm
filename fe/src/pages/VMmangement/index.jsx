import React, { useCallback, useEffect } from 'react';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import { useUserContext } from 'context/User';
import { addTargetBalance, substractTargetBalance } from 'context/User/action';
import * as S from './style';

function VMmangement() {
  const { totalBalance, changesUnits, userDispatch } = useUserContext();

  const fetchAddTargetBalance = useCallback(
    id => {
      addTargetBalance(userDispatch, id);
    },
    [userDispatch],
  );

  const fetchSubstractTargetBalance = useCallback(
    id => {
      substractTargetBalance(userDispatch, id);
    },
    [userDispatch],
  );

  return (
    <S.Container>
      <Products isManger isPriceUnderInputMoney={() => {}} handleOrderProduct={() => {}} />
      <ChangesUnits
        totalBalance={totalBalance}
        changesUnits={changesUnits}
        fetchAddTargetBalance={fetchAddTargetBalance}
        fetchSubstractTargetBalance={fetchSubstractTargetBalance}
      />
    </S.Container>
  );
}

VMmangement.propTypes = {};

export default VMmangement;
