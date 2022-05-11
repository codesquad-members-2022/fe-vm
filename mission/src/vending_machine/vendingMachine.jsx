import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "./vendingMachine.css";
import { menu } from "./menu.js";

const VendingMachineMenuDrink = styled.div`
    background-color: aquamarine;
    width:40px;
    margin: 5px;
    cursor:pointer;
`;

function DrinkMenu({ index, name, price, amount, soldout }) {
    const [count, setCount] = useState(amount);
    const [close, setClose] = useState(soldout);

    useEffect(()=>{
        if(count === 0){
            setClose(true);
        } else if (count>0){
            setClose(false);
        }
    })

    return (
        <VendingMachineMenuDrink onClick={() => {
                setCount(count - 1);
                console.log(count);
            }}>
            <p className="vending-machine__menu__drink--name">{name}</p>
            <p className="vending-machine__menu__drink--price">{price}</p>
            <p className="vending-machine__menu__drink--amount">{amount}</p>
        </VendingMachineMenuDrink>
    );
}

function VendingMachine() {
    const [drink, setDrink] = useState([]);

    useEffect(()=>{
        setDrink(menu);
    })

    return (
        <div className="vending-machine">
            <div className="vending-machine__menu">
                {drink.map(({ name, price, amount }) => (
                    <DrinkMenu name={name} price={price} amount={amount} />
                ))}
            </div>
            <div className="vending-machine__input">
                <input
                    classsName="vending-machine__input__money"
                    type="text"
                    placeholder="동전을 투입하세요."
                />
                <button className="vending-machine__input__return-btn">
                    반환
                </button>
                <div className="vending-machine__input__log">
                    500원이 투입되엇음.
                </div>
            </div>
        </div>
    );
}

export { VendingMachine };
