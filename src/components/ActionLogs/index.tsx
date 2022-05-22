import React, { memo, useRef, useEffect, useState } from 'react';

import { LOG_ACTION, useLog } from '@/Context/VMContext/LogContext';

import * as S from './styles';

export interface LogsProps {
  className: string;
}

export interface LogProps {
  message: string;
}

export interface ContextMenuProps {
  top: number;
  left: number;
}

const ActionLogs = ({ className }: LogsProps) => {
  const { state: logState } = useLog();
  const actionLogsRef = useRef<HTMLOListElement | null>(null);
  const contextMenuWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isContextMenuActive, setIsContextMenuActive] = useState<boolean>(false);
  const [points, setPoints] = useState({ x: 0, y: 0 });

  const onContextMenu = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();

    const {
      nativeEvent: { offsetX, offsetY },
      target,
    } = event;

    if (!(target instanceof Node) || contextMenuWrapperRef.current?.contains(target)) {
      return;
    }

    setPoints({ x: offsetX, y: offsetY });
    setIsContextMenuActive(true);
  };

  useEffect(() => {
    if (actionLogsRef === null || actionLogsRef.current === null) {
      return;
    }

    actionLogsRef.current.scrollTop = actionLogsRef.current.scrollHeight;
  }, [logState]);

  useEffect(() => {
    const onClickOutsideOfContextMenu = () => {
      setIsContextMenuActive(false);
    };

    window.addEventListener('click', onClickOutsideOfContextMenu);
    return () => window.removeEventListener('click', onClickOutsideOfContextMenu);
  }, []);

  return (
    <S.ActionLogsLayout className={className} onContextMenu={onContextMenu}>
      <S.ActionLogsLayer ref={actionLogsRef}>
        {logState.map(({ id, message }) => (
          <ActionLog key={id} message={message} />
        ))}
      </S.ActionLogsLayer>
      <S.ContextMenuWrapper ref={contextMenuWrapperRef}>
        {isContextMenuActive && <ContextMenu top={points.y} left={points.x} />}
      </S.ContextMenuWrapper>
    </S.ActionLogsLayout>
  );
};

const ActionLog = memo(({ message }: LogProps) => {
  return (
    <S.ActionLogLayer>
      <S.Message>{message}</S.Message>
    </S.ActionLogLayer>
  );
});

const ContextMenu = ({ top, left }: ContextMenuProps) => {
  const { dispatch: logDispatch } = useLog();

  const onClickClearLogButton = () => {
    logDispatch({ type: LOG_ACTION.CLEAR });
  };

  return (
    <S.ContextMenuLayer top={top} left={left}>
      <S.ContextMenuItem onClick={onClickClearLogButton}>모든 로그 삭제</S.ContextMenuItem>
    </S.ContextMenuLayer>
  );
};

export default ActionLogs;
