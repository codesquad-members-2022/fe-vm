import styled from 'styled-components';

export const ActionLogsLayout = styled.div`
  position: relative;
  height: 580px;
  padding: 10px;
`;

export const ActionLogsLayer = styled.ol`
  overflow-y: auto;
  height: 100%;
`;

export const ActionLogLayer = styled.li`
  pointer-events: none;
  & + & {
    margin-top: 10px;
  }
`;

export const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSize.lg};
  line-height: 1.2;
`;

export const ContextMenuWrapper = styled.div``;

export const ContextMenuLayer = styled.ol`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  background-color: #fff;
  border: 1px solid #bbb;
  border-radius: 12px;
  padding: 6px;
  width: 70%;
  transition: opacity 200ms;
`;

export const ContextMenuItem = styled.li`
  user-select: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 12px;
  z-index: 999;
  transition: background-color 300ms;

  &:hover {
    background-color: #eee;
  }

  &:active {
    background-color: #eee9;
  }
`;
