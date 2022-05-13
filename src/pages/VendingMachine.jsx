import React, { useState } from 'react';
import styled from 'styled-components';

import items from '../store/store';
import Button from '../components/Button';
import AvailableButton from '../components/AvailableButton';
import Input from '../components/Input';
import ProgressBoard from '../components/ProgressBoard';

export default function VendingMachine() {
  const [inputPrice, setPrice] = useState(0);
  const [content, setContent] = useState(0);
  const [progressMsg, setProgressMsg] = useState([]);
  const [remainMoney, setRemainMoney] = useState(null);

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
    const currentPrice = Number(content);
    setPrice(currentPrice);
    setRemainMoney(remainMoney + currentPrice);
    setProgressMsg([...progressMsg, `${currentPrice}원이 투입되었습니다.`]);
  };

  const handleSelectItem = (title, price) => {
    const currentRemainMoney = remainMoney - price;
    if (currentRemainMoney < 0 && remainMoney !== null) {
      window.alert('요금을 초과하였습니다.');
      return;
    }

    setRemainMoney(currentRemainMoney);
    setProgressMsg([...progressMsg, `${title}가 선택되었습니다.`]);
  };

  const handleClickReturnRemain = () => {
    setProgressMsg([...progressMsg, `잔돈 ${remainMoney}원이 반환됩니다.`]);
  };
  return (
    <StyledContainer>
      <StyledItems>
        {items.map(({ title, price }) => (
          <StyledItem key={`vm-item-${title}`}>
            <AvailableButton
              icon={title}
              isAvailabe={remainMoney >= price}
              disabled={!(remainMoney >= price)}
              onClick={() => handleSelectItem(title, price)}
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
        <Button icon="반환" onClick={handleClickReturnRemain} />
        <ProgressBoard progressMsg={progressMsg} />
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
