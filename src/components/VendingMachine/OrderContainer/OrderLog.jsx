import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';

export default function OrderLog({ log }) {
  const message = info => {
    switch (info.type) {
      case 'INSERT':
        return ` 투입되었습니다.`;
      case 'BUY':
        return `을(를) 구매하였습니다.`;
      case 'DROP':
        return `이(가) 배출되었습니다.`;
      default:
        return;
    }
  };

  if (typeof log.value === 'object') {
    return (
      <Order>
        <strong>{setLocalString(log.value.unit)}원</strong>이 <strong>{log.value.amount}개</strong>
        {message(log)}
      </Order>
    );
  }

  return (
    <Order>
      <strong>{log.value}</strong>
      {message(log)}
    </Order>
  );
}

const Order = styled.li`
  margin-bottom: 4px;
  ${({ theme }) => theme.fontStyles.xSmallRegular};

  strong {
    font-weight: 700;
  }
`;
