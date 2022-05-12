import React, { useContext } from 'react';
import styled from 'styled-components';
import { ProgressContext } from '../App';

import History from './History';

const Message = () => {
  const { progressBox } = useContext(ProgressContext);

  return (
    <StyledMessage>
      <MessageTitle>message</MessageTitle>
      <ul>
        <History progressBox={progressBox} />
      </ul>
    </StyledMessage>
  );
};

const StyledMessage = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 270px;
  height: 400px;
  border: 2px solid gray;
  overflow-y: scroll;
`;

const MessageTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

export default Message;
