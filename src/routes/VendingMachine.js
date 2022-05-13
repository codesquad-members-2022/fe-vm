import React from "react";
import { useState } from "react";
import { data } from "../datas/data";
import "./VendingMachine.css";
import Product from "../components/Product/Product";
import InputValue from "../components/Input/InputValue";
import ReturnButton from "../components/ReturnButton/ReturnButton";
import MessageView from "../components/MessageView/MessageView";
import CurrentPrice from "../components/CurrentPrice/CurrentPrice";

const VendingMachine = () => {
  const [inputPrice, setInputPrice] = useState(undefined);
  const [message, setMessage] = useState([]);
  const [accumulatedPrice, setAccumulatedPrice] = useState(0);

  const writePriceHandler = (event) => {
    setInputPrice(Number(event.target.value));
  };

  const insertPriceHandler = (event) => {
    event.preventDefault();
    setMessage((prev) => [inputPrice, ...prev]);
    setAccumulatedPrice(accumulatedPrice + inputPrice);
    setInputPrice("");
  };

  const selectProductHandler = (event) => {
    setMessage((prev) => [event.target.innerText, ...prev]);
  };

  const returnPrice = () => {
    setAccumulatedPrice(0);
  };

  return (
    <div className="vendingmachine-wrapper">
      <div className="product-wrapper">
        {data.map((v) => (
          <Product
            key={v.id}
            name={v.name}
            price={v.price}
            accumulatedPrice={accumulatedPrice}
            onClick={selectProductHandler}
          />
        ))}
      </div>
      <div className="vendingmachine-input-wrapper">
        <CurrentPrice accumulatedPrice={accumulatedPrice} />
        <InputValue
          onSubmit={insertPriceHandler}
          onChange={writePriceHandler}
          inputPrice={inputPrice}
        />
        <ReturnButton onClick={returnPrice} />
        <MessageView message={message} />
      </div>
    </div>
  );
};

export default VendingMachine;
