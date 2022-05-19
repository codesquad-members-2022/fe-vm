import React, { useContext, memo, useRef, useEffect, useState } from 'react';

import { ACTION, ActionType, VMContext } from '@/Provider/VMProvider';

import * as S from './styles';

export interface LogsProps {
  className: string;
}

export interface LogProps {
  message: string;
}

export interface ContextMenuProps {
  dispatch: React.Dispatch<ActionType>;
  top: number;
  left: number;
}

const ActionLogs = ({ className }: LogsProps) => {
  const {
    state: { logs },
    dispatch,
  } = useContext(VMContext);
  const actionLogsRef = useRef<HTMLOListElement | null>(null);
  const contextMenuWrapperRef = useRef<HTMLDivElement | null>(null);
  const [isContextMenuActive, setIsContextMenuActive] = useState(false);
  const [points, setPoints] = useState({ x: 30, y: 30 });

  const onContextMenu = (event: React.PointerEvent<HTMLDivElement>) => {
    event.preventDefault();

    const {
      nativeEvent: { offsetX, offsetY },
      target,
    } = event;

    if (contextMenuWrapperRef.current?.contains(target)) {
      return;
    }

    setPoints({ x: offsetX, y: offsetY });
    setIsContextMenuActive(true);
  };

  useEffect(() => {
    if (actionLogsRef === null) {
      return;
    }

    actionLogsRef.current.scrollTop = actionLogsRef.current.scrollHeight;
  }, [logs]);

  useEffect(() => {
    const onClick = () => {
      setIsContextMenuActive(false);
    };

    window.addEventListener('click', onClick);
    return () => window.removeEventListener('click', onClick);
  }, []);

  return (
    <S.ActionLogsLayout className={className} onContextMenu={onContextMenu}>
      <S.ActionLogsLayer ref={actionLogsRef}>
        {logs.map(({ id, message }) => (
          <ActionLog key={id} message={message} />
        ))}
      </S.ActionLogsLayer>
      <S.ContextMenuWrapper ref={contextMenuWrapperRef}>
        {isContextMenuActive && <ContextMenu dispatch={dispatch} top={points.y} left={points.x} />}
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

const ContextMenu = ({ dispatch, top, left }: ContextMenuProps) => {
  const onClick = () => {
    dispatch({ type: ACTION.DELETE_ALL_LOGS });
  };

  return (
    <S.ContextMenuLayer top={top} left={left}>
      <S.ContextMenuItem onClick={onClick}>모든 로그 삭제</S.ContextMenuItem>
      <S.ContextMenuItem onClick={onClick}>모든 로그 삭제</S.ContextMenuItem>
      <S.ContextMenuItem onClick={onClick}>모든 로그 삭제</S.ContextMenuItem>
      <S.ContextMenuItem onClick={onClick}>모든 로그 삭제</S.ContextMenuItem>
      <S.ContextMenuItem onClick={onClick}>모든 로그 삭제</S.ContextMenuItem>
    </S.ContextMenuLayer>
  );
};

export default ActionLogs;
