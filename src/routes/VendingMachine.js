import React from "react";
import "./VendingMachine.css";
import Product from "../components/Product/Product";
import Information from "../components/Information/Information";

const VendingMachine = () => {
  return (
    <div className="vendingmachine-wrapper">
      <Product />
      <Information />
    </div>
  );
};

export default VendingMachine;
