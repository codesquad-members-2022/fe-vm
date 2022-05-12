import styled from 'styled-components';

const HistoryList = styled.ol`
  min-height: 100px;
  max-height: 60%;
  padding: 15px;
  border: 1px solid #333;
  border-radius: 4px;
  overflow-y: auto;
`;

const HistoryItem = styled.li`
  margin-top: 5px;
`;

export { HistoryList, HistoryItem };
