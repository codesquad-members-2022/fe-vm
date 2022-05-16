import styled from "styled-components";

export default function LogMessages() {
  return <LogMessagesWrapper>100000원이 투입되었음</LogMessagesWrapper>;
}

const LogMessagesWrapper = styled.div`
  box-sizing: border-box;
  padding: 10px;
  border: 2px solid ${({ theme }) => theme.colors.baeMint};
  border-radius: 4px;
  width: 200px;
  height: 200px;
  overflow: auto;
`;
