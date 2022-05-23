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
  }, [state]);

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

export default LogList;
