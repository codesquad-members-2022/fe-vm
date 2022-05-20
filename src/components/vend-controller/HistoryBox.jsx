import { HistoryContext } from "context";
import { useContext } from "react";
import styled from "styled-components";

const StyledHistoryBox = styled.ul`
  height: 300px;
  background-color: #f2f2f2;
  overflow-y: scroll;
  margin-top: 10px;

  li {
    padding: 5px;
  }
`;

function History({ comment }) {
  return comment;
}

function HistoryBox() {
  const histories = useContext(HistoryContext);

  return (
    <StyledHistoryBox>
      {histories.history.map(({ id, comment }) => (
        <li key={id}>
          <History comment={comment} />
        </li>
      ))}
    </StyledHistoryBox>
  );
}

export { HistoryBox };
