import React from 'react';

import DisplayBox, { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';
import MoneyCounters from '@components/molecules/MoneyCounters';
import * as S from '@components/organisms/WalletInfo/WalletInfo.style';
import money from '@data/money';
import { formatPrice, getTotalMoney } from '@lib/utils';

const WalletInfo = () => {
  const totalMoney = getTotalMoney(money);

  return (
    <S.Container>
      <DisplayBox
        size={DISPLAY_BOX_SIZE.LARGE}
        title='잔액'
        content={`${formatPrice(totalMoney)}원`}
      />
      <MoneyCounters money={money} />
    </S.Container>
  );
};

export default WalletInfo;
