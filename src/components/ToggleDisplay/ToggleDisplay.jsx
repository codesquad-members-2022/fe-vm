import { Button } from "components";
import { useDisplay } from "hooks";
import { StyledDisplay } from "./ToggleDisplay.styled";

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
