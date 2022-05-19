import { Routes, Route } from "react-router-dom";

import NavBtn from "component/NavBtn";
import NotFound from "page/NotFound";
import VendingMachine from "page/VendingMachine";
import Wallet from "page/Wallet";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "theme";

function App() {
    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <NavBtn />
                <Routes>
                    <Route path="/" element={<VendingMachine />} />
                    <Route path="/wallet" element={<Wallet />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
