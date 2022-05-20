import { Link, Routes, Route, Outlet } from "react-router-dom";
import { VendingMachine } from "./vending_machine/vendingMachine.jsx";
import { Wallet } from "./wallet/wallet.jsx";
import {
    AppDiv,
    AppHeader,
    AppHeaderNav,
    AppHeaderTitle,
    LinkStyle,
} from "./App_styled.jsx";

function Layout() {
    return (
        <>
            <AppHeader>
                <AppHeaderTitle>Mission : Vending Machine</AppHeaderTitle>
                <AppHeaderNav>
                    <Link style={LinkStyle} to="/">
                        자판기
                    </Link>{" "}
                    |{" "}
                    <Link style={LinkStyle} to="/wallet">
                        지갑
                    </Link>
                </AppHeaderNav>
            </AppHeader>
            <Outlet />
        </>
    );
}

function App() {
    return (
        <>
            <AppDiv>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<VendingMachine />}></Route>
                        <Route path="wallet" element={<Wallet />}></Route>
                    </Route>
                </Routes>
            </AppDiv>
        </>
    );
}

export { App };
