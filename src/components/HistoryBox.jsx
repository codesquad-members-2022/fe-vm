import styled from "styled-components";

const StyledHistoryBox = styled.ul`
  height: 300px;
  background-color: #f2f2f2;
  overflow-y: scroll;
  margin-top: 10px;
`;

const History = styled.li``;

function HistoryBox() {
  const history = [{ id: 1, type: "input", content: "500" }];
  return (
    <StyledHistoryBox>
      {history.map(({ id, type, content }) => (
        <History key={id}>{content + type}</History>
      ))}
    </StyledHistoryBox>
  );
}

export { HistoryBox };
