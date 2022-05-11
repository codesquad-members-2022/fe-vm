import styled from "styled-components";

const StyledBalance = styled.div`
  width: 100%;
  background-color: #c0eda6;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  border: none;
  margin-top: 10px;
`;

function Balance({ balance }) {
  return <StyledBalance>{balance + "원"}</StyledBalance>;
}

export { Balance };
