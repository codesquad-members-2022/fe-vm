import { useContext } from "react";
import styled from "styled-components";
import { Records } from "../../../ContextProvider";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  width: calc(100% - 50px);
  height: 400px;
  border-radius: 10px;
  box-shadow: inset 0px 0px 10px 0 rgba(31, 38, 135, 0.37);
  background-color: ${({ theme }) => theme.colors.grey4};

  div {
    margin: 5px;
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

const MessageDisplay = () => {
  const { records } = useContext(Records);

  return (
    <MessageWrapper>
      {records.map((record) => (
        <div>{record}</div>
      ))}
    </MessageWrapper>
  );
};
export default MessageDisplay;
