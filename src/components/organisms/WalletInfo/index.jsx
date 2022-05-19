import React from 'react';

import PropTypes from 'prop-types';

import DisplayBox, { DISPLAY_BOX_SIZE } from '@components/atoms/DisplayBox';
import MoneyCounters from '@components/molecules/MoneyCounters';
import * as S from '@components/organisms/WalletInfo/WalletInfo.style';
import { formatPrice, getTotalMoney } from '@lib/utils';

const WalletInfo = ({ wallet, changeMoneyQuantity }) => {
  const totalMoney = getTotalMoney(wallet);

  return (
    <S.Container>
      <DisplayBox
        size={DISPLAY_BOX_SIZE.LARGE}
        title='잔액'
        content={`${formatPrice(totalMoney)}원`}
      />
      <MoneyCounters wallet={wallet} changeMoneyQuantity={changeMoneyQuantity} />
    </S.Container>
  );
};

WalletInfo.propTypes = {
  wallet: PropTypes.array,
  changeMoneyQuantity: PropTypes.func,
};

export default WalletInfo;
