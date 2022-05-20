import styled from 'styled-components';

export const StyledLogMonitorContainer = styled.div`
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.color.gray};
  width: 400px;
  height: 420px;
  min-height: 360px;
  padding: 20px;
  overflow-y: scroll;
`;

export const StyledLog = styled.div`
  font-size: 20px;
`;
