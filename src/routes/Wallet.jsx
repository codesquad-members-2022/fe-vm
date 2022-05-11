import { useOutletContext } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { WalletWrapper, WalletItemContainer, WalletItem } from "./Wallet.Style";

function Wallet() {
    const { wallet } = useOutletContext();
    const walletState = [];

    for (let moneyUnit of Object.keys(wallet)) {
        walletState.push(
            <WalletItemContainer key={uuid()}>
                <WalletItem>{moneyUnit}</WalletItem>
                <WalletItem>{wallet[moneyUnit]}</WalletItem>
            </WalletItemContainer>
        );
    }

    return <WalletWrapper>{walletState}</WalletWrapper>;
}

export default Wallet;
