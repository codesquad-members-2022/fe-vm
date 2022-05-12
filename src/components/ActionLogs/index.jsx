import React, { useContext, memo } from 'react';
import styled from 'styled-components';

import { VMContext } from '@/Provider/VMProvider';

const ActionLogs = ({ className }) => {
  const {
    state: { logs },
  } = useContext(VMContext);

  return (
    <ActionLogsLayout className={className}>
      <ActionLogsLayer>
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
  padding-right: 5px;
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
  font-size: 18px;
`;

export default ActionLogs;
