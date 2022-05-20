import { HistoryContext } from "context";
import { useContext } from "react";
import { StyledHistoryBox } from "./VendController.styled";

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
