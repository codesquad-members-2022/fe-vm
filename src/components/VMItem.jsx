import styled from 'styled-components';

import COLORS from 'constants/colors';

const VMItem = ({ item: { name, price } }) => (
  <li>
    <ItemWrapper>
      <ItemNameBox>
        <span>{name}</span>
      </ItemNameBox>
      <ItemPriceBox>
        <span>{price}원</span>
      </ItemPriceBox>
    </ItemWrapper>
  </li>
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
  border: 2px solid ${COLORS.GREY};
  cursor: pointer;
`;

const ItemPriceBox = styled.div`
  display: flex;
  justify-content: center;
`;
export default VMItem;
