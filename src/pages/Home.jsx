import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { DisplayContext, CoinProvider, InsertCoinProvider, HistoryProvider } from "context";
import { AppLayout, MainNav, ToggleDisplay } from "components";
import { theme } from "styles";

function Home() {
  const { displayMode } = useContext(DisplayContext);
  const displayObject = displayMode === "light" ? theme.lightTheme : theme.darkTheme;

  return (
    <AppLayout display={displayObject}>
      <ToggleDisplay />
      <MainNav />
      <HistoryProvider>
        <InsertCoinProvider>
          <CoinProvider>
            <Outlet />
          </CoinProvider>
        </InsertCoinProvider>
      </HistoryProvider>
    </AppLayout>
  );
}

export { Home };
