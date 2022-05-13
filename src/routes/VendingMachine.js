import React from "react";
import { useState } from "react";
import { data } from "../datas/data";
import "./VendingMachine.css";
import Product from "../components/Product/Product";
import InputValue from "../components/Input/InputValue";
import ReturnValue from "../components/ReturnValue/ReturnValue";
import MessageView from "../components/MessageView/MessageView";
import CurrentPrice from "../components/CurrentPrice/CurrentPrice";

const VendingMachine = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [amount, setAmount] = useState(0);

  const onChangeValue = (event) => {
    setValue(Number(event.target.value));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setMessage((prev) => [value, ...prev]);
    setAmount(amount + value);
    console.log(amount);
    setValue("");
  };

  const onClick = (event) => {
    setMessage((prev) => [event.target.innerText, ...prev]);
  };

  return (
    <div className="vendingmachine-wrapper">
      <div className="product-wrapper">
        {data.map((v) => (
          <Product
            key={v.id}
            name={v.name}
            price={v.price}
            amount={amount}
            onClick={onClick}
          />
        ))}
      </div>
      <div className="vendingmachine-input-wrapper">
        <CurrentPrice amount={amount} />
        <InputValue
          onSubmit={onSubmit}
          onChange={onChangeValue}
          value={value}
        />
        <ReturnValue />
        <MessageView message={message} />
      </div>
    </div>
  );
};

export default VendingMachine;
