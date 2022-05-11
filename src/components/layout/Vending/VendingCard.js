import React from 'react';
import styled from 'styled-components';

const VendingCard = ({ isAffordable, name, price }) => {
  return (
    <VendingCardList isAffordable={isAffordable}>
      <VendingCardName>{name}</VendingCardName>
      <span>{price}</span>
    </VendingCardList>
  );
};

const VendingCardList = styled.li`
  ${({ theme }) => theme.mixin.flexMixin('column')};
  border: 1px solid black;
  width: 23%;
  height: 18%;
  border-color: ${({ isAffordable }) => isAffordable && 'red'};
`;

const VendingCardName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 20px;
`;

export default VendingCard;
