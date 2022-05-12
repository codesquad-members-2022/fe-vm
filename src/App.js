import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "styles";
import reset from "styled-reset";
import { DisplayProvider } from "context";
import { Routers } from "components";

const GlobalStyles = createGlobalStyle`
${reset}
* {
  box-sizing : border-box;
}

body{
  width:100%;
  margin: 0 auto;
  font-family: sans-serif;
}

div {
  border-radius: 10px;
}

a:hover {
  cursor: pointer;
  font-size: 1.2em;
}
`;

function App() {
  return (
    <DisplayProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routers />
      </ThemeProvider>
    </DisplayProvider>
  );
}

export default App;
