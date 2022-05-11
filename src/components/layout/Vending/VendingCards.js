import React, { useContext } from 'react';
import styled from 'styled-components';
import VendingCard from './VendingCard';
import { DUMMY_DATA, _ } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';

const VendingCards = (props) => {
  const amountCtx = useContext(AmountContext);

  return (
    <VendingCardLists>
      {DUMMY_DATA.map((v) => (
        <VendingCard
          id={v.id}
          key={v.id}
          name={v.name}
          price={v.price}
          isAffordable={amountCtx.totalAmount >= v.price}
        />
      ))}
    </VendingCardLists>
  );
};

const VendingCardLists = styled.ul`
  ${({ theme }) => theme.mixin.flexMixin('row', _, 'space-between', 'wrap')};
  width: 55%;
  height: 90%;
`;

export default VendingCards;
