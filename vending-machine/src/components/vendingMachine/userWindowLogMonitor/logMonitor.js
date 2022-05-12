import { useContext } from 'react';
import { LogContext } from '../vendingMachine';
import { StyledLogMonitorContainer, StyledLog } from './logMonitor.styled';

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
