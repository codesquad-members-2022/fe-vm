import styled from "styled-components";

const ToggleWrapper = styled.div`
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 100vh;
  width: 100vw;
  border-radius: 0px;
  background-color: ${({ display }) => display.backgroundColor};
`;

export { ToggleWrapper };
