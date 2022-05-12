import { useContext } from 'react';
import styled from 'styled-components';

import { CashContext } from 'context';
import { COLORS, TYPOGRAPHY } from 'constants';
import { formatPrice } from 'util/util';

const TotalCash = () => {
  const { totalCash } = useContext(CashContext);

  return (
    <TotalCashContainer>
      <span>보유 금액</span>
      <span>{formatPrice(totalCash)}</span>
    </TotalCashContainer>
  );
};

const TotalCashContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  border-radius: 20px;
  color: ${COLORS.WHITE};
  background: ${COLORS.BLUE};
  font-size: ${TYPOGRAPHY.SIZE.LARGE};
  font-weight: ${TYPOGRAPHY.WEIGHT.MEDIUM};
`;

export default TotalCash;
