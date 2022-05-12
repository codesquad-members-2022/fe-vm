import { VendingMachineContainer } from "components";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset}
  font-family: 'Noto Sans KR';
  font-style: normal;
  button{
      background-color: transparent;
      border: none;
  }
  button:hover{
      cursor:pointer;
  } 
  // body {
  //   maring: 0 auto; 
  // }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <VendingMachineContainer />
    </div>
  );
}

export default App;
