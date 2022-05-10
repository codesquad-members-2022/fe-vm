import styled from 'styled-components';
import UserOrder from './Order';

export default function OrderContainer() {
  return (
    <OrderWrapper>
      <UserOrder />
      <div>
        <InputCost type="text" placeholder="0 원" disabled />
        <InputCostBtn>투입</InputCostBtn>
      </div>
      <ReturnCost>반환</ReturnCost>
    </OrderWrapper>
  );
}

const OrderWrapper = styled.div`
  padding: 20px;
  border: 1px solid black;
  border-left: none;
  text-align: right;
  background: ${({ theme }) => theme.colors.green};
`;

const InputCost = styled.input`
  margin-right: 8px;
  padding: 8px;
  text-align: right;
  outline: none;
  ${({ theme }) => theme.fontStyles.SmallBold};

  &:disabled {
    border: none;
    outline: none;
    background: ${({ theme }) => theme.colors.white};
  }
`;

const InputCostBtn = styled.button`
  margin-bottom: 12px;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray3};
  color: ${({ theme }) => theme.colors.gray1};
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;

const ReturnCost = styled.button`
  padding: 6px 24px;
  background: ${({ theme }) => theme.colors.gray1};
  color: ${({ theme }) => theme.colors.gray3};
  ${({ theme }) => theme.fontStyles.xSmallBold};
`;
