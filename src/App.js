import { Route, Routes } from "react-router-dom";
import { VendingMachineContainer, Layout, Wallet } from "components";
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
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<VendingMachineContainer />}></Route>
          <Route path="/vendingmachine" element={<VendingMachineContainer />}></Route>
          <Route path="/wallet" element={<Wallet />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
