import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home/Home";
import VendingMachine from "./routes/vendingMachine/VendingMachine";
import Wallet from "./routes/wallet/Wallet";
import NotFound from "./routes/NotFound";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

function App() {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}>
                            <Route path="vm" element={<VendingMachine />} />
                            <Route path="wallet" element={<Wallet />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
