import { useState, useEffect } from 'react';
import setLocalString from 'utils/setLocalString';
import styled from 'styled-components';
import UserOrder from './Order';

export default function OrderContainer() {
  const [value, setValue] = useState('');

  const handleChange = e => {
    if (e.target.value.length > 6) return;
    setValue(setLocalString(e.target.value.replace(/[^0-9]/g, '')));
  };

  useEffect(() => {
    setValue(setLocalString(value.replace(/[^0-9]/g, '')));
  }, [value]);

  return (
    <Container>
      <UserOrder />
      <CostWrapper>
        <InputWrapper>
          <InputCost type="text" placeholder="0" value={value} onChange={handleChange} />
          <span>원</span>
        </InputWrapper>
        <InputCostBtn>투입</InputCostBtn>
      </CostWrapper>
      <ReturnCost>반환</ReturnCost>
      <PickupBox>PUSH</PickupBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-left: none;
  border-radius: 0 12px 12px 0;
  text-align: right;
  background: ${({ theme }) => theme.colors.green};
`;

const CostWrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  margin-right: 12px;
  padding: 0 8px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.offWhite};
  box-shadow: 0 2px 2px 0 rgba(38, 38, 135, 0.1);

  span {
    ${({ theme }) => theme.fontStyles.xSmallBold};
  }
`;

const InputCost = styled.input`
  width: 80%;
  padding: 8px;
  text-align: right;
  border: none;
  outline: none;
  background: transparent;
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;

const InputCostBtn = styled.button`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray3};
  box-shadow: 0 2px 2px 0 rgba(38, 38, 135, 0.1);
  color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;

const ReturnCost = styled.button`
  padding: 4px 24px;
  margin-bottom: 24px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 0 2px 2px 0 rgba(38, 38, 135, 0.3);
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;

const PickupBox = styled.div`
  width: 100%;
  padding: 28px;
  border-radius: 8px;
  text-align: center;
  background: ${({ theme }) => theme.colors.gray1};
  box-shadow: 0 4px 4px 0 rgba(38, 38, 135, 0.5);
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fontStyles.largeBold};
`;
