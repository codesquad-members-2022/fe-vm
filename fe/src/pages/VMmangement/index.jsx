import React, { useEffect } from 'react';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import { useVMContext } from 'context/VMContext';
import { divideBalance } from 'context/VMContext/action';
import * as S from './style';

function VMmangement() {
  const { totalBalance, changesUnits, dispatch } = useVMContext();

  useEffect(() => {
    divideBalance(dispatch, changesUnits, totalBalance);
  }, [totalBalance, dispatch]);

  return (
    <S.Container>
      <Products isPriceUnderInsertMoney={() => {}} />
      <ChangesUnits totalBalance={totalBalance} changesUnits={changesUnits} />
    </S.Container>
  );
}

VMmangement.propTypes = {};

export default VMmangement;
