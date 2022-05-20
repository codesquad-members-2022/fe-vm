import React, { useState, useEffect, useReducer } from "react";
import { menu } from "./menu.js";
import {
    VendingMachineDiv,
    VendingMachineMenu,
    VendingMachineDrink,
    VendingMachineInsertCoin,
    VendingMachineInputBox,
    VendingMachineInputTitle,
    VendingMachineInsertTotal,
    VendingMachineInputReturnBtn,
    VendingMachineInputLog,
} from "./vendingMachine_styled.jsx";

function Drink({ index, name, price, amount, choiceLog }) {
    const readyDrink = {
        index: index,
        name: name,
        price: price,
        amount: amount,
        sellAvailable: false,
        soldOut: false,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "sellDrink":
                choiceLog(name);
                return {
                    index: index,
                    name: name,
                    price: price,
                    amount: state.amount - 1,
                    sellAvailable: false,
                    soldOut: false,
                };
            default:
                throw new Error();
        }
    };

    const [drink, dispatch] = useReducer(reducer, readyDrink);

    useEffect(() => {
        if (readyDrink.amount === 0) {
            readyDrink.soldOut = true;
        }
    });

    return (
        <>
            <VendingMachineDrink
                onClick={() => dispatch({ type: "sellDrink" })}
            >
                <p className="drink-name">{drink.name}</p>
                <p className="drink-price">{drink.price}</p>
                <p className="drink-amount">수량 : {drink.amount}</p>
            </VendingMachineDrink>
        </>
    );
}

function VendingMachineInputForm({ addValue }) {
    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const keyPress = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            console.log(userInput);
            addValue(userInput);
            setUserInput("");
        }
    };

    return (
        <VendingMachineInsertCoin
            onChange={handleChange}
            onKeyDown={keyPress}
            type="text"
            value={userInput}
            placeholder="동전을 투입하세요!"
        />

    );
}

function VendingMachine() {
    const [drink, setDrink] = useState([]);
    const [total, setTotal] = useState(0);
    const [logs, setLog] = useState([
        { text: "0원이 투입되었습니다.", money: "0" },
    ]);
    const throttlingButton = {
        timerButton: false,
    };

    const returnTimer = new Promise((res) => {
        res(payback());
        setTimeout(() => {
            const newLog = [
                ...logs,
                {
                    text: `${total}이 반환되었습니다.`,
                    money: "0",
                },
            ];
            setLog(newLog);
            setTotal(0);
        }, 5000);
        console.log("timer");
    });

    const payback = await returnTimer

    const insertSlot = (inputMoney) => {
        throttlingButton.timerButton = true; // 동전투입하면 반환타이머 작동.
        const newLog = [
            ...logs,
            {
                text: `${inputMoney}원이 투입되었습니다.`,
                money: inputMoney,
            },
        ];
        setLog(newLog);
        calculateCoin(newLog);
        console.log(newLog);
    };

    const chooseDrink = (drink) => {
        const newLog = [
            ...logs,
            {
                text: `${drink}를 선택하셨습니다.`,
                money: "0",
            },
        ];
        setLog(newLog);
        console.log(newLog);
    };

    const calculateCoin = (c) => {
        let sum = 0;
        const numArr = c.map((e) => Number(e.money));
        for (const i of numArr) {
            sum += i;
        }
        console.log(sum);
        setTotal(sum);
        return sum;
    };

    useEffect(() => {
        setDrink(menu);
        if (total === 0) {
            throttlingButton.timerButton = false;
        }
        if (throttlingButton.timerButton === false) {
            clearTimeout(returnTimer);
            console.log("returnTimer canceled!");
        }
    });

    return (
        <>
            <VendingMachineDiv>
                <VendingMachineMenu>
                    {drink.map(({ i, name, price, amount }) => (
                        <Drink
                            index={i}
                            name={name}
                            price={price}
                            amount={amount}
                            choiceLog={chooseDrink}
                        />
                    ))}
                </VendingMachineMenu>
                <VendingMachineInputBox>
                    <VendingMachineInputTitle>
                        결제가 힘든 자판기
                    </VendingMachineInputTitle>
                    <VendingMachineInsertTotal>
                        투입금액: {total}
                    </VendingMachineInsertTotal>
                    <VendingMachineInputForm addValue={insertSlot} />
                    <VendingMachineInputReturnBtn onClick={returnTimer}>
                        반환
                    </VendingMachineInputReturnBtn>
                    <VendingMachineInputLog>
                        {logs.map((l, index) => (
                            <p key={index}>{l.text}</p>
                        ))}
                    </VendingMachineInputLog>
                </VendingMachineInputBox>
            </VendingMachineDiv>
        </>

    );
}

export { VendingMachine };
