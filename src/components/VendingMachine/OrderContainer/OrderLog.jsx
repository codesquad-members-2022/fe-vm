import { useRef, useEffect, memo } from 'react';
import styled from 'styled-components';
import setLocalString from 'utils/setLocalString';
import logMessage from 'utils/logmessage';

const OrderLog = ({ log }) => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <Order>
      {typeof log.value === 'object' ? (
        <>
          <strong>{setLocalString(log.value.unit)}원</strong>이{' '}
          <strong>{log.value.amount}개</strong>
          {logMessage(log.type)}
        </>
      ) : (
        <>
          <strong>{log.value}</strong>
          {logMessage(log.type)}
        </>
      )}
      <div ref={scrollRef}></div>
    </Order>
  );
};

export default memo(OrderLog);

const Order = styled.li`
  margin-bottom: 4px;
  ${({ theme }) => theme.fontStyles.xSmallRegular};

  strong {
    font-weight: 700;
  }
`;
