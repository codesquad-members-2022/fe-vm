import { AppLayout, Nav, ToggleDisplay } from "components";
import { Outlet } from "react-router-dom";
import { DisplayContext } from "context";
import { theme } from "styles";
import { useContext } from "react";

function Home() {
  const { displayMode } = useContext(DisplayContext);
  const displayObject = displayMode === "light" ? theme.lightTheme : theme.darkTheme;

  return (
    <AppLayout display={displayObject}>
      <ToggleDisplay />
      <Nav />
      <Outlet />
    </AppLayout>
  );
}

export { Home };
