import { useContext, useState } from 'react';
import styled from 'styled-components';

import { CashContext } from 'context';
import { COLORS, TYPOGRAPHY, ICON_TYPE } from 'constants';
import { formatPrice } from 'util/util';
import IconButton from 'components/Wallet/IconButton';

const CashUnit = ({ id, unit, count, order }) => {
  const { cash, setCash, totalCash, setTotalCash } = useContext(CashContext);
  const [unitCount, setUnitCount] = useState(count);

  const adjustUnitCount = type => {
    const [newCount, newTotalCash] = type
      ? [unitCount + 1, totalCash + unit]
      : [unitCount - 1, totalCash - unit];

    if (newCount < 0) return;

    setUnitCount(newCount);
    setTotalCash(newTotalCash);
    updateCash(newCount);
  };

  const updateCash = newCount => {
    const unitId = id;
    const newCash = [...cash].map(({ id, unit, count, order }) =>
      unitId === id ? { id, unit, count: newCount, order } : { id, unit, count, order },
    );
    setCash(newCash);
  };

  return (
    <Unit order={order}>
      <span>{formatPrice(unit)}원</span>

      <CountAdjuster>
        <IconButton type={ICON_TYPE.MINUS} handleClick={() => adjustUnitCount(false)} />
        {unitCount}
        <IconButton type={ICON_TYPE.PLUS} handleClick={() => adjustUnitCount(true)} />
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

export default CashUnit;
