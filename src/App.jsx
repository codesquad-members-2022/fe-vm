import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import VendingMachine from "./routes/VendingMachine";
import Wallet from "./routes/Wallet";
import NotFound from "./routes/NotFound";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="vm" element={<VendingMachine />} />
                    <Route path="wallet" element={<Wallet />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
