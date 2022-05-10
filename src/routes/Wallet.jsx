import { useOutletContext } from "react-router-dom";
import { v4 as uuid } from "uuid";

function Wallet() {
    const { wallet } = useOutletContext();
    const walletState = [];

    for (let key of Object.keys(wallet)) {
        walletState.push(
            <li key={uuid()}>
                <div>{key}</div>
                <div>{wallet[key]}</div>
            </li>
        );
    }

    return (
        <>
            <h1>지갑</h1>
            <ul>{walletState}</ul>
        </>
    );
}

export default Wallet;
