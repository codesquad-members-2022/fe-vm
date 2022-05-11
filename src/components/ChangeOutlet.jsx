import styled from "styled-components";

const StyledChangeOutlet = styled.div`
  height: 70px;
  background-color: #000;
  margin-left: 10px;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`;

function ChangeOutlet() {
  return <StyledChangeOutlet>change</StyledChangeOutlet>;
}

export { ChangeOutlet };
