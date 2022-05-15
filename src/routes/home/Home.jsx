import { Outlet, Link, useLocation } from "react-router-dom";
import { HomeContainer, TabNav, TabButton } from "./Home.style";
import VendingMachineProvider from "../../context/VendingMachineContext";
import WalletProvider from "../../context/WalletContext";

const VM = "vm";
const WALLET = "wallet";

function Home() {
    const { pathname } = useLocation();

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
            <WalletProvider>
                <VendingMachineProvider>
                    <Outlet />
                </VendingMachineProvider>
            </WalletProvider>
        </HomeContainer>
    );
}

export default Home;
