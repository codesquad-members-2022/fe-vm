import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import { WalletCashesContext } from 'context';
import { COLORS, TYPOGRAPHY, ICON_TYPE } from 'constants';
import { formatPrice, getTotalCash } from 'util/util';
import IconButton from 'components/Wallet/IconButton';

const CashCard = ({ id, unit, count, order }) => {
  const { cashes, setCashes, setTotalCash } = useContext(WalletCashesContext);
  const [cashCount, setCashCount] = useState(count);

  const getNewCashes = newCount =>
    cashes.map(cash => (id === cash.id ? { ...cash, count: newCount } : cash));

  const adjustCashCount = type => {
    const newCount = type ? cashCount + 1 : cashCount - 1;
    if (newCount < 0) return;

    const newCashes = getNewCashes(newCount);
    const newTotalCash = getTotalCash(newCashes);

    setCashCount(newCount);
    setCashes(newCashes);
    setTotalCash(newTotalCash);
  };

  return (
    <Unit order={order}>
      <span>{formatPrice(unit)}원</span>
      <CountAdjuster>
        <IconButton type={ICON_TYPE.MINUS} handleClick={() => adjustCashCount(false)} />
        {cashCount}
        <IconButton type={ICON_TYPE.PLUS} handleClick={() => adjustCashCount(true)} />
      </CountAdjuster>
    </Unit>
  );
};

const Unit = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80px;
  border-radius: 16px;
  background: ${COLORS.WHITE};
  font-size: ${TYPOGRAPHY.SIZE.MEDIUM};
  font-weight: ${TYPOGRAPHY.WEIGHT.MEDIUM};
  order: ${({ order }) => order};
`;

const CountAdjuster = styled.div`
  display: flex;
  height: 24px;
  gap: 12px;
`;

export default CashCard;
