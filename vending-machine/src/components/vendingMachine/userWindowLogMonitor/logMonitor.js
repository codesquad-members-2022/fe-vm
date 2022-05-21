import { useContext } from 'react';
import { StyledLogMonitorContainer, StyledLog } from './logMonitor.styled';
import { LogContext } from '../../../context/logProvider';

export function LogMonitor() {
  const { logList } = useContext(LogContext);

  return (
    <StyledLogMonitorContainer>
      {logList.map((log, idx) => (
        <StyledLog key={idx}>{log}</StyledLog>
      ))}
    </StyledLogMonitorContainer>
  );
}
