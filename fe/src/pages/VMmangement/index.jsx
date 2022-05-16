import React, { useCallback, useEffect } from 'react';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import { useVMContext } from 'context/VMContext';
import { getBalance, addTargetBalance, substractTargetBalance } from 'context/VMContext/action';
import * as S from './style';

function VMmangement() {
  const { totalBalance, changesUnits, dispatch } = useVMContext();

  const fetchAddTargetBalance = useCallback(
    id => {
      addTargetBalance(dispatch, id);
    },
    [dispatch],
  );

  const fetchSubstractTargetBalance = useCallback(
    id => {
      substractTargetBalance(dispatch, id);
    },
    [dispatch],
  );

  useEffect(() => {
    getBalance(dispatch);
  }, [dispatch]);

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
