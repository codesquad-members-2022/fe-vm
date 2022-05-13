import React, { useContext, memo, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { VMContext } from '@/Provider/VMProvider';

const ActionLogs = ({ className }) => {
  const {
    state: { logs },
  } = useContext(VMContext);
  const actionLogsRef = useRef(null);

  useEffect(() => {
    if (actionLogsRef === null) {
      return;
    }

    actionLogsRef.current.scrollTop = actionLogsRef.current.scrollHeight;
  });

  return (
    <ActionLogsLayout className={className}>
      <ActionLogsLayer ref={actionLogsRef}>
        {logs.map(({ id, message }) => (
          <ActionLog key={id} message={message} />
        ))}
      </ActionLogsLayer>
    </ActionLogsLayout>
  );
};

const ActionLog = memo(({ message }) => {
  return (
    <ActionLogLayer>
      <Message>{message}</Message>
    </ActionLogLayer>
  );
});

const ActionLogsLayout = styled.div`
  height: 580px;
  padding: 10px;
`;

const ActionLogsLayer = styled.ol`
  overflow-y: auto;
  height: 100%;
`;

const ActionLogLayer = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.2;
`;

export default ActionLogs;
