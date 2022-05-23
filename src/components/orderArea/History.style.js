import styled from 'styled-components';

const HistoryList = styled.ol`
  height: 20%;
  min-height: 200px;
  padding: 20px;
  background: #fff;
  border-radius: 4px;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const HistoryItem = styled.li`
  font-size: 22px;
  line-height: 1.6;
  letter-spacing: -0.2px;
  &:first-child {
    margin-top: 0;
  }
`;

export { HistoryList, HistoryItem };
