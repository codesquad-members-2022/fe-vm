import { useContext } from 'react';
import styled from 'styled-components';

import COLORS from 'constants/colors';
import { MoneyContext } from 'context/MoneyProvider';

const VMItem = ({ item: { name, price }, insertVMLog }) => {
  const { inputMoney, setInputMoney } = useContext(MoneyContext);
  const isActive = inputMoney >= price;

  const handleClickActiveItem = () => {
    if (!isActive) return;
    setInputMoney(inputMoney - price);
    insertVMLog({
      type: 'select',
      data: name,
    });
  };

  return (
    <li>
      <ItemWrapper>
        <ItemNameBox isActive={isActive} onClick={handleClickActiveItem}>
          <span>{name}</span>
        </ItemNameBox>
        <ItemPriceBox>
          <span>{price}원</span>
        </ItemPriceBox>
      </ItemWrapper>
    </li>
  );
};

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
  border: 3px solid ${({ isActive }) => (isActive ? COLORS.RED : COLORS.GREY)};
  cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
`;

const ItemPriceBox = styled.div`
  display: flex;
  justify-content: center;
`;
export default VMItem;
