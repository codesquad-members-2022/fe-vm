import styled from "styled-components";
import { Button } from "components";
import { useDisplay } from "hooks";

const StyledDisplay = styled.div`
  position: absolute;
  top: 30px;
  right: 100px;

  button {
    box-shadow: 0px 0px 7px;
  }
`;

function ToggleDisplay() {
  const { displayMode, toggleDisplay } = useDisplay();
  const color = displayMode === "light" ? "white" : "black";
  const icon = displayMode === "light" ? "🌚" : "🌝";

  return (
    <StyledDisplay>
      <Button color={color} size="small" onClick={toggleDisplay}>
        {icon}
      </Button>
    </StyledDisplay>
  );
}

export { ToggleDisplay };
