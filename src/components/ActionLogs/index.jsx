import React from 'react';
import styled from 'styled-components';

const ActionLogsLayout = styled.div`
  height: 580px;
  padding-right: 5px;
`;

const ActionLogsLayer = styled.ol`
  overflow-y: auto;
  height: 100%;
`;

const ActionLogs = ({ className }) => {
  return (
    <ActionLogsLayout className={className}>
      <ActionLogsLayer>
        <ActionLog />
      </ActionLogsLayer>
    </ActionLogsLayout>
  );
};

const ActionLog = () => {
  return (
    <li>
      <p>ActionLog</p>
    </li>
  );
};

export default ActionLogs;
