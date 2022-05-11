import styled from 'styled-components';

export const StyledShowWindowContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px 30px;
  align-content: start;
  min-height: 800px;
  padding-right: 20px;
  border-right: 5px solid ${({ theme }) => theme.color.black};
`;
