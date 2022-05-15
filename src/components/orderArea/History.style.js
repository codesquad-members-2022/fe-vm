import styled from 'styled-components';

const HistoryList = styled.ol`
  height: 20%;
  min-height: 200px;
  padding: 25px 20px;
  background: #fff;
  border-radius: 4px;
  overflow-y: auto;
`;

const HistoryItem = styled.li`
  margin-top: 12px;
  font-size: 22px;
  letter-spacing: -0.2px;
  &:first-child {
    margin-top: 0;
  }
`;

export { HistoryList, HistoryItem };
