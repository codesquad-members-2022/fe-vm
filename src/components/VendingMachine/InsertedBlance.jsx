import { useContext } from 'react';
import styled from 'styled-components';

import { COLORS, TYPOGRAPHY } from 'constants';
import { WalletCashesContext } from 'context';
import { formatPrice } from 'util/util';

const InsertedBlance = () => {
  const { totalInputCash } = useContext(WalletCashesContext);

  return (
    <Balance>
      <span>투입 금액</span>
      <span>{formatPrice(totalInputCash)} 원</span>
    </Balance>
  );
};

const Balance = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  height: 80px;
  color: ${COLORS.WHITE};
  background: ${COLORS.BLUE};
  font-size: ${TYPOGRAPHY.SIZE.MEDIUM};
  font-weight: ${TYPOGRAPHY.WEIGHT.MEDIUM};
  border-radius: 24px;
`;

export default InsertedBlance;
