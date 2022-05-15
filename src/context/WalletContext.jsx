import React, { useContext, useState, useMemo } from "react";
import dataOfwallet from "../data/wallet";

const WalletContext = React.createContext();
export const useWalletContext = () => useContext(WalletContext);

function WalletProvider({ children }) {
    const [wallet, setWallet] = useState(dataOfwallet);
    const updateWallet = (newWallet) => {
        setWallet(newWallet);
    };

    const totalAmount = useMemo(
        () => wallet.reduce((acc, money) => acc + money.unit * money.count, 0),
        [wallet]
    );

    const walletProps = { wallet, updateWallet, totalAmount };

    return (
        <WalletContext.Provider value={walletProps}>
            {children}
        </WalletContext.Provider>
    );
}

export default WalletProvider;
