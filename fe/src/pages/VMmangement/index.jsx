import React, { useContext } from 'react';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import { Context as VMcontext } from 'context/VMcontext';
import Products from 'components/Products';
import * as S from './style';

function VMmangement() {
  const { VMstate, VMdispatch } = useContext(VMcontext);
  const { totalBalance, changesUnits } = VMstate;
  return (
    <S.Container>
      <Products isPriceUnderInsertMoney={() => {}} />
      <ChangesUnits totalBalance={totalBalance} changesUnits={changesUnits} />
    </S.Container>
  );
}

VMmangement.propTypes = {};

export default VMmangement;
