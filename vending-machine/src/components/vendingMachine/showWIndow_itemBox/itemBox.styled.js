import styled from 'styled-components';

export const StyledItemContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const StyledItemName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 120px;
  font-size: 26px;
  border: 1px solid ${({ theme }) => theme.color.gray};
`;

export const StyledItemPrice = styled.div`
  margin-top: 10px;
  font-size: 26px;
`;
