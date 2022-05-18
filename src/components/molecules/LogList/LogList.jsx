import React, { useEffect, useRef } from 'react';
import mockData from './LogListMockData';
import ListItem from 'components/atoms/ListItem/ListItem';
import { LogListWrapper, StyledLogList } from './LogList.style';

const LogList = () => {
  const logListRef = useRef(null);

  useEffect(() => {
    logListRef.current.scrollTop = logListRef.current.scrollHeight;
  }, []);

  return (
    <LogListWrapper>
      <StyledLogList ref={logListRef}>
        {mockData.map((v, i) => {
          return <ListItem key={v.id}>{getParsedLog(v.action, v.contents)}</ListItem>;
        })}
      </StyledLogList>
    </LogListWrapper>
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
