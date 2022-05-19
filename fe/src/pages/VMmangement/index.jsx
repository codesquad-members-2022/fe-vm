import React, { useCallback } from 'react';
import ChangesUnits from 'pages/VMmangement/ChangesUnits';
import Products from 'components/Products';
import { useUserContext } from 'context/User';
import { addTargetBalance, substractTargetBalance } from 'context/User/action';
import userApi from 'api/user';
import * as S from './style';

function VMmangement() {
  const { totalBalance, changesUnits, userDispatch } = useUserContext();

  const fetchAddTargetBalance = useCallback(
    async id => {
      try {
        const { data } = await userApi.addTargetBalance(id);
        addTargetBalance(userDispatch, data);
      } catch (error) {
        console.error(error);
      }
    },
    [userDispatch],
  );

  const fetchSubstractTargetBalance = useCallback(
    async id => {
      try {
        const { data } = await userApi.substractTargetBalance(id);
        substractTargetBalance(userDispatch, data);
      } catch (error) {
        console.error(error);
      }
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

export default VMmangement;
