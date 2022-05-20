import { Link, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { VendingMachine } from "./vending_machine/vendingMachine.jsx";

function Layout() {
    return (
        <div>
            <header className="App-header">
                <h2>Mission : Vending Machine</h2>
                <nav>
                    <Link to="/">자판기</Link> | <Link to="/wallet">지갑</Link>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<VendingMachine />}></Route>
                    <Route path="wallet"></Route>
                </Route>
            </Routes>
        </div>
    );
}

export { App };
