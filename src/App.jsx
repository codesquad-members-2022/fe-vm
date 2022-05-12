import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import VendingMachine from "./routes/vendingMachine/VendingMachine";
import Wallet from "./routes/wallet/Wallet";
import NotFound from "./routes/NotFound";
import { GlobalStyle } from "./GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="vm" element={<VendingMachine />} />
                        <Route path="wallet" element={<Wallet />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
