import styled from 'styled-components';

export default function OrderLog({ log }) {
  const message = info => {
    switch (info.type) {
      case 'INSERT':
        return `이 투입되었습니다.`;
      default:
        return;
    }
  };

  return (
    <Order>
      <strong>{log.value}원</strong>
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
