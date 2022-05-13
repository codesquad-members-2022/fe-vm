import { useContext } from 'react';
import styled from 'styled-components';

import { CashContext } from 'context';
import { COLORS } from 'constants';

import CashUnit from 'components/Wallet/CashUnit';
import TotalCash from 'components/Wallet/TotalCash';

const Wallet = () => {
  const { cash } = useContext(CashContext);
  return (
    <WalletContainer>
      <TotalCash />

      <CashUnits>
        {cash.map(({ id, unit, count, order }) => (
          <CashUnit key={id} id={id} unit={unit} count={count} order={order} />
        ))}
      </CashUnits>
    </WalletContainer>
  );
};

const WalletContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 800px;
`;

const CashUnits = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 8px));
  gap: 16px;
  padding: 64px 72px;
  border-radius: 24px;
  background: ${COLORS.GRAY_1};
`;

export default Wallet;
