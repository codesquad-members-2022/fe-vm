import styled from 'styled-components';
import UserOrder from './Order';
import UserInput from './Input';
import ReturnCost from './Retrun';

export default function OrderContainer() {
  return (
    <Container>
      <UserOrder />
      <UserInput />
      <ReturnCost />
      <PickupBox>PUSH</PickupBox>
    </Container>
  );
}

const Container = styled.div`
  width: 280px;
  padding: 20px;
  border: 1px solid black;
  border-left: none;
  border-radius: 0 12px 12px 0;
  text-align: right;
  background: ${({ theme }) => theme.colors.green};
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
