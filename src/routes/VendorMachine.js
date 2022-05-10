import React from "react";
import { data } from "../datas/data";
import "./VendorMachine.css";
import Product from "../components/Product";

function VendorMachine() {
  return (
    <div className="product-wrapper">
      {data.map((v) => (
        <Product key={v.id} name={v.name} price={v.price} />
      ))}
    </div>
  );
}

export default VendorMachine;
