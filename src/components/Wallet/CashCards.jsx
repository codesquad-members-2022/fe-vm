import styled from 'styled-components';

import { COLORS } from 'constants';
import { WalletCashesContext } from 'context';
import CashCard from 'components/Wallet/CashCard';
import { useContext } from 'react';

const CashCards = () => {
  const { cashes } = useContext(WalletCashesContext);

  return (
    <CashCardsContainer>
      {cashes.map(cash => (
        <CashCard key={cash.id} {...cash} />
      ))}
    </CashCardsContainer>
  );
};

const CashCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 8px));
  gap: 16px;
  padding: 64px 72px;
  border-radius: 24px;
  background: ${COLORS.GRAY_1};
`;

export default CashCards;
