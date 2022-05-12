import { Route, Routes } from "react-router-dom";
import { Layout } from "components";
import { VendingMachineContainer, Wallet, NotFound } from "pages";
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
          <Route index element={<VendingMachineContainer />} />
          <Route path="/vendingmachine" element={<VendingMachineContainer />} />
          <Route path="/wallet" element={<Wallet />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
