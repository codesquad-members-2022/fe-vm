import { useContext } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import MoneyBoxes from 'components/Wallet/MoneyBoxes';
import COLORS from 'constants/colors';
import { MoneyContext } from 'context/MoneyProvider';

const Wallet = () => {
  const { walletMoney } = useContext(MoneyContext);

  const totalMoney = walletMoney?.reduce(
    (sum, { amount, count }) => sum + amount * count,
    0
  );

  return (
    <WalletLayout>
      <MoneyBoxes moneyData={walletMoney} />
      <TotalPrice>{parseMoneyFormat(totalMoney)}</TotalPrice>
    </WalletLayout>
  );
};

const WalletLayout = styled.div`
  display: grid;
  grid-gap: 10px;
  flex-direction: column;
  width: 300px;
  height: 500px;
  padding: 30px;
  background-color: ${COLORS.WHITE};
  border: 0.5rem solid ${COLORS.DARK_GREY};
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  border: 1px solid black;
`;

export default Wallet;
