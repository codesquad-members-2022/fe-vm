import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./page/Layout";
import VendingMachine from "./page/VendingMachine";
import Wallet from "./page/Wallet";
import NotFound from "./page/NotFound";
import theme from "./theme";

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Reset />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<VendingMachine />} />
                            <Route path="/wallet" element={<Wallet />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
