import styled from 'styled-components';

export const StyledVMContainer = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border: 5px solid ${({ theme }) => theme.color.black};
`;
