import React, { useContext, memo, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { ACTION, VMContext } from '@/Provider/VMProvider';

const ActionLogs = ({ className }) => {
  const {
    state: { logs },
    dispatch,
  } = useContext(VMContext);
  const actionLogsRef = useRef(null);
  const contextMenuWrapperRef = useRef(null);
  const [isContextMenuOpen, setIsContextMenuOpen] = useState(false);
  const [points, setPoints] = useState({ x: 30, y: 30 });

  const onContextMenu = (event) => {
    event.preventDefault();

    const {
      nativeEvent: { offsetX, offsetY },
      target,
    } = event;

    if (contextMenuWrapperRef.current.contains(target)) {
      return;
    }

    setPoints({ x: offsetX, y: offsetY });
    setIsContextMenuOpen(true);
  };

  useEffect(() => {
    if (actionLogsRef === null) {
      return;
    }

    actionLogsRef.current.scrollTop = actionLogsRef.current.scrollHeight;
  });

  useEffect(() => {
    const onClick = () => {
      setIsContextMenuOpen(false);
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <ActionLogsLayout className={className} onContextMenu={onContextMenu}>
      <ActionLogsLayer ref={actionLogsRef}>
        {logs.map(({ id, message }) => (
          <ActionLog key={id} message={message} />
        ))}
      </ActionLogsLayer>
      <ContextMenuWrapper ref={contextMenuWrapperRef}>
        {isContextMenuOpen && <ContextMenu dispatch={dispatch} top={points.y} left={points.x} />}
      </ContextMenuWrapper>
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

const ContextMenu = ({ dispatch, top, left }) => {
  const onClick = () => {
    dispatch({ type: ACTION.DELETE_ALL_LOGS });
  };

  return (
    <ContextMenuLayer top={top} left={left}>
      <ContextMenuItem onClick={onClick}>모든 로그 삭제</ContextMenuItem>
      <ContextMenuItem onClick={onClick}>모든 로그 삭제</ContextMenuItem>
      <ContextMenuItem onClick={onClick}>모든 로그 삭제</ContextMenuItem>
      <ContextMenuItem onClick={onClick}>모든 로그 삭제</ContextMenuItem>
      <ContextMenuItem onClick={onClick}>모든 로그 삭제</ContextMenuItem>
    </ContextMenuLayer>
  );
};

const ActionLogsLayout = styled.div`
  position: relative;
  height: 580px;
  padding: 10px;
`;

const ActionLogsLayer = styled.ol`
  pointer-events: none;
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

const ContextMenuWrapper = styled.div``;

const ContextMenuLayer = styled.ol`
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

const ContextMenuItem = styled.li`
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

export default ActionLogs;
