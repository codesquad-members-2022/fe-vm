import { useContext } from "react";
import styled from "styled-components";
import { Records } from "../../../contextProviders/RecordsProvider";

const MessageDisplay = () => {
  const { records } = useContext(Records);

  return (
    <MessageWrapper>
      {records.map((record, i) => (
        <div key={i}>{record}</div>
      ))}
    </MessageWrapper>
  );
};

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  width: calc(100% - 50px);
  height: 400px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 30px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.white};

  div {
    margin: 10px;
    width: 95%;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  div:hover {
    white-space: normal;
  }
`;

export default MessageDisplay;
