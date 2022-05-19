/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import NavBtn from "component/common/NavBtn";
import ItemStock from "page/ItemStock";
import NotFound from "page/NotFound";
import VendingMachine from "page/VendingMachine";
import Wallet from "page/Wallet";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme from "theme";

export const vendingMachineContext = React.createContext();

function App() {
    const [stockLoading, setStockLoading] = useState(false);
    const [walletLoading, setWalletLoading] = useState(false);
    const [itemList, setItemList] = useState([]);
    const [coinList, setCoinList] = useState([]);
    const [insertedCoin, setInsertedCoin] = useState({});

    const typeOfCoins = Object.keys(insertedCoin);
    const totalAmout = typeOfCoins.reduce((result, curr) => result + curr * insertedCoin[curr], 0);

    async function fetchItemListData(url) {
        setStockLoading(true);
        const response = await fetch(url);
        const itemListData = await response.json();
        setItemList(itemListData);
        setStockLoading(false);
    }

    async function fetchWalletData(url) {
        setWalletLoading(true);
        const response = await fetch(url);
        const coinListData = await response.json();
        setCoinList(coinListData);
        setWalletLoading(false);
    }

    useEffect(() => {
        fetchItemListData("http://localhost:3000/itemStock");
        fetchWalletData("http://localhost:3000/wallet");
    }, []);

    return (
        <>
            <Reset />
            <ThemeProvider theme={theme}>
                <NavBtn />
                <vendingMachineContext.Provider
                    value={{
                        stockLoading,
                        itemList,
                        walletLoading,
                        coinList,
                        setCoinList,
                        insertedCoin,
                        setInsertedCoin,
                        totalAmout,
                    }}
                >
                    <Routes>
                        <Route path="/" element={<VendingMachine />} />
                        <Route path="/wallet" element={<Wallet />} />
                        <Route path="/item-stock" element={<ItemStock />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </vendingMachineContext.Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
