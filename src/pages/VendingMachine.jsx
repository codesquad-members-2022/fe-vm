import React from 'react';
import styled from 'styled-components';

import { items } from '../store/store';
import Button from '../components/Button';
import AvailableButton from '../components/AvailableButton';
import Input from '../components/Input';

export default function VendingMachine() {
  return (
    <StyledContainer>
      <StyledItems>
        {items.map(({ title, price }) => (
          <StyledItem key={`vm-item-${title}`}>
            <AvailableButton icon={title} />
            <StyledPrice>{price}</StyledPrice>
          </StyledItem>
        ))}
      </StyledItems>
      <StyledController>
        <Input />
        <Button icon="반환" />
        <div>현황판</div>
      </StyledController>
    </StyledContainer>
  );
}
const CONTAINER_SIZE = 500;

const StyledContainer = styled.div`
  display: flex;
`;

const StyledItems = styled.ul`
  display: flex;
  width: ${CONTAINER_SIZE}px;
  flex-wrap: wrap;
`;

const StyledItem = styled.li`
  width: ${CONTAINER_SIZE / 4}px;
  display: flex;
  flex-direction: column;
`;

const StyledController = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledPrice = styled.span`
  text-align: center;
`;
