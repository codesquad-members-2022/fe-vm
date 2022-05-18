import { memo, useCallback } from 'react';
import styled from 'styled-components';

import { parseMoneyFormat } from 'common/utils';
import COLORS from 'constants/colors';

const defaultStyle = `
  border: 3px solid ${COLORS.GREY};
`;
const soldOutStyle = `
  background-color: ${COLORS.MAIN_BG};
  color: ${COLORS.GREY}
`;
const activeStyle = `
  border: 3px solid ${COLORS.RED};
  cursor: pointer;
`;

const vmItemStyleMap = {
  soldout: soldOutStyle,
  active: activeStyle,
  default: defaultStyle,
};

const VMItem = memo(
  ({ item: { id, name, amount }, onClickActiveItem, isSoldOut, isActive }) => {
    const getStatus = useCallback(() => {
      if (isSoldOut) return 'soldout';
      return isActive ? 'active' : 'default';
    }, [isSoldOut, isActive]);

    const handleClickActiveItem = () => {
      if (!isActive) return;
      onClickActiveItem({ id, amount, name });
    };

    return (
      <li>
        <ItemWrapper>
          <ItemNameBox status={getStatus()} onClick={handleClickActiveItem}>
            <span>{name}</span>
          </ItemNameBox>
          <ItemPriceBox>
            <span>{parseMoneyFormat(amount)}</span>
          </ItemPriceBox>
        </ItemWrapper>
      </li>
    );
  }
);

const ItemWrapper = styled.div`
  display: grid;
  grid-template-rows: 6fr 2fr;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ItemNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 5rem;
  ${({ status }) => vmItemStyleMap[status]}
`;

const ItemPriceBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default VMItem;
