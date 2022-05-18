import React, { useContext } from 'react';
import styled from 'styled-components';
import VendingCard from './VendingCard';
import { DUMMY_DATA, _ } from '../../../constant/constant';
import AmountContext from '../../../store/AmountContext';

const VendingCards = (props) => {
  const { money } = useContext(AmountContext);
  // const onClickHander = (props) => {
  //   console.log(props);
  //   // console.log(parseInt(e.currentTarget.textContent));
  // };
  return (
    <VendingCardLists>
      {DUMMY_DATA.map(({ id, name, price }) => (
        <VendingCard
          id={id}
          key={id}
          name={name}
          price={price}
          isAffordable={money.TOTAL_AMOUNT >= price}
          // onSave={onClickHander}
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
