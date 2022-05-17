import { Reset } from "styled-reset";
import { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import VendingMachine from "page/VendingMachine";
import Wallet from "page/Wallet";
import NotFound from "page/NotFound";
import theme from "theme";
import NavBtn from "component/NavBtn";

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
