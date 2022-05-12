import React, { useEffect } from 'react';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import { useVMContext } from 'context/VMContext';
import * as S from './style';

function VMmangement() {
  const { totalBalance, changesUnits, divideBalance } = useVMContext();
  console.log('changesUnits', changesUnits);

  useEffect(() => {
    divideBalance(changesUnits, totalBalance);
  }, [totalBalance, divideBalance]);

  return (
    <S.Container>
      <Products isPriceUnderInsertMoney={() => {}} />
      <ChangesUnits totalBalance={totalBalance} changesUnits={changesUnits} />
    </S.Container>
  );
}

VMmangement.propTypes = {};

export default VMmangement;
