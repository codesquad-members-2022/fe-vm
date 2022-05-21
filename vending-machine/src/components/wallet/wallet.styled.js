import styled from 'styled-components';

export const StyledWalletContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 400px;
  height: 900px;
  margin: 0 auto;
  padding: 20px;
  border: 5px solid ${({ theme }) => theme.color.black};
`;
