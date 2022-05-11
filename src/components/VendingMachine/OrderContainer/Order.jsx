import styled from 'styled-components';

export default function UserOrder() {
  return <OrderList />;
}

const OrderList = styled.ul`
  width: 100%;
  height: 400px;
  margin-bottom: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.offWhite};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
`;

// const Order = styled.li`
//   margin-bottom: 4px;
//   ${({ theme }) => theme.fontStyles.xSmallRegular};

//   strong {
//     font-weight: 700;
//   }
// `;
