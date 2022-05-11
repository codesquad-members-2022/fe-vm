import { useOutletContext } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { WalletWrapper, WalletItemContainer, WalletItem } from "./Wallet.Style";

function Wallet() {
    const { wallet } = useOutletContext();

    return (
        <WalletWrapper>
            {Object.keys(wallet).map((moneyUnit) => (
                <WalletItemContainer key={uuid()}>
                    <WalletItem>{moneyUnit}</WalletItem>
                    <WalletItem>{wallet[moneyUnit]}</WalletItem>
                </WalletItemContainer>
            ))}
        </WalletWrapper>
    );
}

export default Wallet;
