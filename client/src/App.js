import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import VM from "./components/VM/VM";
import Wallet from "./components/Wallet/Wallet";
import InputStore from "./store/InputStore";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <InputStore>
        <Routes>
          <Route path="/" element={<VM />} />
          <Route path="/wallet" element={<Wallet />} />
          {/* <Route path="/*" element={<NotFound />} /> */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </InputStore>
    </BrowserRouter>
  );
}

export default App;
