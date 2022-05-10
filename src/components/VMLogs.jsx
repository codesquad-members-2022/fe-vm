import styled from 'styled-components';

import COLORS from 'constants/colors';

const parseVmLog = ({ type, data }) => {
  switch (type) {
    case 'insert':
      return `${data}원 이 투입됐음.`;
    case 'select':
      return `${data}가 선택됨`;
    case 'return':
      return `잔돈 ${data}원 반환`;
    default:
      return '잘못된 로그';
  }
};

const VMLogs = ({ logs }) => (
  <VMLogsWrapper>
    {logs.map((log) => (
      <VMLog key={log.id}>{parseVmLog(log)}</VMLog>
    ))}
  </VMLogsWrapper>
);

const VMLogsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 3px solid ${COLORS.GREY};
`;

const VMLog = styled.span``;

export default VMLogs;
