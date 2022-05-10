import styled from 'styled-components';

export default function UserOrder() {
  return <Order />;
}

const Order = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray3};
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.offWhite};
`;
