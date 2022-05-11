import React from "react";
import { useState } from "react";
import { data } from "../datas/data";
import "./VendingMachine.css";
import Product from "../components/Product/Product";
import InputValue from "../components/Input/InputValue";
import ReturnValue from "../components/ReturnValue/ReturnValue";
import MessageView from "../components/MessageView/MessageView";

const VendingMachine = () => {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState([]);
  const [product, setProduct] = useState("");
  const [text, setText] = useState([]);

  const onChangeValue = (event) => setValue(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    setMessage((prev) => [value, ...prev]);
    setValue("");
  };

  const onClick = (event) => {
    setProduct(event.target.innerText);
  };

  return (
    <div className="vendingmachine-wrapper">
      <div className="product-wrapper">
        {data.map((v) => (
          <Product key={v.id} name={v.name} price={v.price} onClick={onClick} />
        ))}
      </div>
      <div className="vendingmachine-input-wrapper">
        <InputValue
          onSubmit={onSubmit}
          onChange={onChangeValue}
          value={value}
        />
        <ReturnValue />
        <MessageView message={message} text={text} />
      </div>
    </div>
  );
};

export default VendingMachine;
