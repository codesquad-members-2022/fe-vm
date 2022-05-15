import React, { useContext, useState } from "react";
import dataOfwallet from "../data/wallet";

const WalletContext = React.createContext();
export const useWallet = () => useContext(WalletContext);

function WalletProvider({ children }) {
    const [wallet, setWallet] = useState(dataOfwallet);
    const updateWallet = (newWallet) => {
        setWallet(newWallet);
    };

    const walletProps = { wallet, updateWallet };

    return (
        <WalletContext.Provider value={walletProps}>
            {children}
        </WalletContext.Provider>
    );
}

export default WalletProvider;
