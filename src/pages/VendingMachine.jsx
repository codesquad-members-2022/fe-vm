import React, { useState } from 'react';
import styled from 'styled-components';

import { items } from '../store/store';
import Button from '../components/Button';
import AvailableButton from '../components/AvailableButton';
import Input from '../components/Input';

export default function VendingMachine() {
  const [inputPrice, setPrice] = useState(0);
  const [content, setContent] = useState(0);

  const handleChangeInput = ({ currentTarget }) => {
    setContent(currentTarget.textContent);
  };

  const handleClickSave = () => {
    if (Number.isNaN(Number(content))) {
      window.alert('숫자만 입력 가능합니다.');
      return;
    }

    if (Number(content) < 10) {
      window.alert('10원 이상 추가해야합니다.');
      return;
    }

    // Todo : 지갑에 요금의 개수가 없거나 지갑 전체 요금보다 큰 경우 예외처리
    setPrice(Number(content));
  };
  return (
    <StyledContainer>
      <StyledItems>
        {items.map(({ title, price }) => (
          <StyledItem key={`vm-item-${title}`}>
            <AvailableButton
              icon={title}
              isAvailabe={inputPrice >= price}
              disabled={!(inputPrice >= price)}
            />
            <StyledPrice>{price}</StyledPrice>
          </StyledItem>
        ))}
      </StyledItems>
      <StyledController>
        <Input
          price={inputPrice}
          onChangeInput={handleChangeInput}
          onClickSave={handleClickSave}
        />
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
