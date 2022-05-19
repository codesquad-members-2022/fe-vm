import React from 'react';
import styled from 'styled-components';

const VendingCard = ({ isAffordable, name, price, onSave }) => {
  const onClickHandler = () => {
    onSave(price, name);
  };

  return (
    <VendingCardList
      isAffordable={isAffordable}
      onClick={onClickHandler}
      price={price}
    >
      <VendingCardName>{name}</VendingCardName>
      <span>{price}</span>
    </VendingCardList>
  );
};

const VendingCardList = styled.li`
  ${({ theme }) => theme.mixin.flexMixin('column')};
  border: 1px solid ${({ isAffordable }) => (isAffordable ? 'red' : 'black')};
  width: 23%;
  height: 18%;
`;

const VendingCardName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 20px;
`;

export default VendingCard;
