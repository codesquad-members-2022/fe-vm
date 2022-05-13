import { Outlet, Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import dataOfwallet from "../../data/wallet";
import { HomeContainer, TabNav, TabButton } from "./Home.style";

const VM = "vm";
const WALLET = "wallet";

export const WalletContext = React.createContext();
export const VendingMachineContext = React.createContext();

function Home() {
    const { pathname } = useLocation();
    const [record, setRecord] = useState([]);
    const [moneyInVendingMachine, setMoneyInVendingMachine] = useState({});
    const [wallet, setWallet] = useState(dataOfwallet);

    const currentTab = (() => {
        switch (pathname.slice(1)) {
            case VM: {
                return VM;
            }
            case WALLET: {
                return WALLET;
            }
            default: {
                return null;
            }
        }
    })();

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

    return (
        <HomeContainer>
            <TabNav>
                <TabButton isCurrentTab={currentTab === VM}>
                    <Link to="/vm">자판기</Link>
                </TabButton>
                <TabButton isCurrentTab={currentTab === WALLET}>
                    <Link to="/wallet">지갑</Link>
                </TabButton>
            </TabNav>
            {pathname === "/" && <h1>버튼을 클릭하세요</h1>}
            <WalletContext.Provider value={{ wallet, updateWallet }}>
                <VendingMachineContext.Provider
                    value={{
                        record,
                        addRecord,
                        moneyInVendingMachine,
                        putMoneyIntoVendingMachine,
                    }}
                >
                    <Outlet />
                </VendingMachineContext.Provider>
            </WalletContext.Provider>
        </HomeContainer>
    );
}

export default Home;