import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import wallet from "../data/wallet";

function Home() {
    const { pathname } = useLocation();
    const [record, setRecord] = useState([]);
    const [moneyInVendingMachine, setMoneyInVendingMachine] = useState({});

    const addRecord = (newRecord) => {
        setRecord([...record, newRecord]);
    };
    const putMoneyIntoVendingMachine = (money) => {
        moneyInVendingMachine[money] = moneyInVendingMachine[money]
            ? moneyInVendingMachine[money] + 1
            : 1;
        setMoneyInVendingMachine(moneyInVendingMachine);
    };

    return (
        <>
            <nav>
                <Link to="/vm">자판기</Link>
                <Link to="/wallet">지갑</Link>
            </nav>
            {pathname === "/" && <h1>버튼을 클릭하세요</h1>}
            <Outlet
                context={{
                    wallet,
                    record,
                    addRecord,
                    moneyInVendingMachine,
                    putMoneyIntoVendingMachine,
                }}
            />
        </>
    );
}

export default Home;
