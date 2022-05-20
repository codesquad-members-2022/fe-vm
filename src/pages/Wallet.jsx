import styled from 'styled-components';

import TotalCash from 'components/Wallet/TotalCash';
import CashCards from 'components/Wallet/CashCards';

const Wallet = () => {
  return (
    <WalletContainer>
      <TotalCash />
      <CashCards />
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

export default Wallet;
