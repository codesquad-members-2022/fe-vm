/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
import { useRef, useContext } from "react";

import { vendingMachineContext } from "App.jsx";
import logo from "asset/codesquad.png";
import insertIcon from "asset/insert.png";
import returnIcon from "asset/return.png";
import VendingMachineDisplay from "component/vending-machine/VendingMachineDisplay";
import * as uiConst from "constant/uiConstant";
import styled from "styled-components";

import HistoryLog from "./HistoryLog";

function OrderBox() {
    const { insertedCoin, setInsertedCoin, totalAmout, coinList, setCoinList } =
        useContext(vendingMachineContext);

    const inputRef = useRef(false);

    function adjustCoinType(value) {
        // TODO: 금액 보정 알고리즘 - 개수도 확인해야함, 맞는 금액 없음 nill 반환
        return +value;
    }

    function handleInsertBtn() {
        const correctCoinType = adjustCoinType(inputRef.current.value);
        if (!correctCoinType) return;
        setInsertedCoin((prev) => {
            return { ...prev, [correctCoinType]: (prev[correctCoinType] || 0) + 1 };
        });
        setCoinList((prev) => {
            const curr = [...prev];
            curr.forEach((el, idx) => {
                if (el.value === correctCoinType) {
                    curr[idx].quantity -= 1;
                }
            });
            return curr;
        });
        inputRef.current.value = "";
    }

    function handleReturnBtn() {
        const newCoinList = [...coinList];
        const keyOfCoins = Object.keys(insertedCoin);

        keyOfCoins.forEach((keyOfCoin) => {
            newCoinList.forEach((coin, idx) => {
                if (coin.value === +keyOfCoin) {
                    newCoinList[idx].quantity += insertedCoin[keyOfCoin];
                }
            });
        });

        setCoinList(newCoinList);
        setInsertedCoin({});
    }

    return (
        <OrderContainer>
            <VendingMachineLogo />
            <VendingMachineDisplay totalAmout={totalAmout} />
            <VendingMachineInput type="text" ref={inputRef} placeholder="금액을 입력해주세요" />
            <VendingMachineBtnBox>
                <ReturnBtn onClick={handleReturnBtn} />
                <InsertBtn onClick={handleInsertBtn} />
            </VendingMachineBtnBox>
            <HistoryLog />
        </OrderContainer>
    );
}

const OrderContainer = styled.div`
    margin: ${({ theme }) => theme.margins.lg};
`;

const VendingMachineLogo = styled.div`
    height: ${uiConst.VENDING_MACHINE_LOGO};
    background: url(${logo}) center no-repeat;
    background-size: contain;
`;

const VendingMachineBtnBox = styled.div`
    display: flex;
`;

const ReturnBtn = styled.button`
    width: ${uiConst.RETURN_BTN_WIDTH};
    height: ${uiConst.RETURN_BTN_HEIGHT};
    margin: ${({ theme }) => theme.margins.lg};
    background: url(${returnIcon});
    background-size: contain;
    border: none;
    cursor: pointer;
`;

const VendingMachineInput = styled.input`
    height: ${uiConst.INSERT_INPUT_HEIGHT};
    width: ${uiConst.INSERT_INPUT_WIDTH};
    font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const InsertBtn = styled.button`
    width: ${uiConst.INSERT_BTN_WIDTH};
    height: ${uiConst.INSERT_BTN_HEIGHT};
    margin: ${({ theme }) => theme.margins.lg};
    background: url(${insertIcon});
    background-size: contain;
    border: none;
    cursor: pointer;
`;

export default OrderBox;
