import { useContext } from 'react';
import styled from 'styled-components';

import { WalletCashesContext } from 'context';
import { COLORS } from 'constants';

import CashCard from 'components/Wallet/CashCard';
import TotalCash from 'components/Wallet/TotalCash';

const Wallet = () => {
  console.log('render Wallet');
  const { cashes } = useContext(WalletCashesContext);
  return (
    <WalletContainer>
      <TotalCash />
      <CashUnits>
        {cashes.map(cash => (
          <CashCard key={cash.id} {...cash} />
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
