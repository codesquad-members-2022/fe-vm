import React, { useContext } from 'react';

import VendingMachineInfo from '@components/organisms/VendingMachineInfo';
import WalletInfo from '@components/organisms/WalletInfo';
import { MoneyContext } from '@context/money/provider';
import * as S from '@pages/Wallet/Wallet.style';

const Wallet = () => {
  const { state, options, changeMoneyQuantity } = useContext(MoneyContext);

  return (
    <S.Container>
      {state && (
        <>
          <VendingMachineInfo
            options={options}
            insertedMoney={state.insertedMoney}
            changeMoneyQuantity={changeMoneyQuantity}
          />
          <WalletInfo wallet={state.wallet} changeMoneyQuantity={changeMoneyQuantity} />
        </>
      )}
    </S.Container>
  );
};

export default Wallet;
