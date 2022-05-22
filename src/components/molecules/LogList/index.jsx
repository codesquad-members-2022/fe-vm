import React, { useContext, useEffect, useRef } from 'react';
import mockData from './LogListMockData';
import ListItem from 'components/atoms/ListItem';
import * as Styled from 'components/molecules/LogList/LogList.style';
import { LogContext } from 'context/Log';

const LogList = () => {
  const { state } = useContext(LogContext);
  const logListRef = useRef(null);

  useEffect(() => {
    logListRef.current.scrollTop = logListRef.current.scrollHeight;
  }, []);

  return (
    <Styled.LogListWrapper>
      <Styled.LogList ref={logListRef}>
        {state?.logList.map(({ id, message }, i) => {
          return <ListItem key={id}>{message}</ListItem>;
        })}
      </Styled.LogList>
    </Styled.LogListWrapper>
  );
};

function getParsedLog(action, contents = null) {
  return {
    input: `${contents}원을 투입했습니다!`,
    output: `${contents}원이 반환되었습니다!`,
    select: `${contents}(이/가) 선택되었습니다!`,
    error: `잔액이 부족합니다!`,
  }[action];
}

export default LogList;
