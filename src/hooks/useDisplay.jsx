import { DisplayContext } from "context";
import { useCallback, useContext } from "react";

function useDisplay() {
  const { displayMode, setDisplayMode } = useContext(DisplayContext);

  const toggleDisplay = useCallback(() => {
    setDisplayMode(displayMode === "light" ? "dark" : "light");
  }, [displayMode, setDisplayMode]);

  return { displayMode, toggleDisplay };
}

export { useDisplay };
