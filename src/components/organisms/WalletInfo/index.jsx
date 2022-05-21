import React, { useContext } from 'react';

import DisplayBox, { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';
import MoneyCounters from '@components/molecules/MoneyCounters';
import * as S from '@components/organisms/WalletInfo/WalletInfo.style';
import { MoneyContext } from '@context/money/provider';
import { formatPrice, getTotalMoney } from '@lib/utils';

const WalletInfo = () => {
  const { state, insertMoney } = useContext(MoneyContext);

  const totalMoney = state && getTotalMoney(state.wallet);

  return (
    <S.Container>
      {state && (
        <>
          <DisplayBox
            size={DISPLAY_BOX_SIZE.LARGE}
            title='잔액'
            content={`${formatPrice(totalMoney)}원`}
          />
          <MoneyCounters wallet={state.wallet} insertMoney={insertMoney} />
        </>
      )}
    </S.Container>
  );
};

export default WalletInfo;
