import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import dataOfwallet from "../../data/wallet";
import { HomeContainer, TabNav, TabButton } from "./Home.style";

const VM = "vm";
const WALLET = "wallet";

function Home() {
    const { pathname } = useLocation();
    const [currentTab, setCurrentTab] = useState(pathname.slice(1));
    const [record, setRecord] = useState([]);
    const [moneyInVendingMachine, setMoneyInVendingMachine] = useState({});
    const [wallet, setWallet] = useState(dataOfwallet);

    const addRecord = (newRecord) => {
        setRecord([...record, newRecord]);
    };
    const putMoneyIntoVendingMachine = (money) => {
        moneyInVendingMachine[money] = moneyInVendingMachine[money]
            ? moneyInVendingMachine[money] + 1
            : 1;
        setMoneyInVendingMachine(moneyInVendingMachine);
    };
    const updateWallet = (newWallet) => {
        setWallet(newWallet);
    };
    const changeTab = (newTab) => {
        setCurrentTab(newTab);
    };

    return (
        <HomeContainer>
            <TabNav>
                <TabButton isCurrentTab={currentTab === VM}>
                    <Link to="/vm" onClick={() => changeTab(VM)}>
                        자판기
                    </Link>
                </TabButton>
                <TabButton isCurrentTab={currentTab === WALLET}>
                    <Link to="/wallet" onClick={() => changeTab(WALLET)}>
                        지갑
                    </Link>
                </TabButton>
            </TabNav>
            {pathname === "/" && <h1>버튼을 클릭하세요</h1>}
            <Outlet
                context={{
                    wallet,
                    updateWallet,
                    record,
                    addRecord,
                    moneyInVendingMachine,
                    putMoneyIntoVendingMachine,
                }}
            />
        </HomeContainer>
    );
}

export default Home;
