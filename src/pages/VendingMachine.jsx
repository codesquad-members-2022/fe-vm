import React, { useContext, useEffect, useState } from "react";
import ProductStand from "components/VendingMachine/ProductStand";
import VMSideInfo from "components/VendingMachine/VMSideInfo";
import { API } from "utils";
import MotionPageContainer from "components/Motion/MotionPageContainer";
import { ProductStateContext } from "contexts/ProductProvider";

const VendingMachine = () => {
  const products = useContext(ProductStateContext);

  return (
    <MotionPageContainer
      className={"text-lg rounded-b-2xl shadow-lg shadow-gray"}
      translateX={-100}
    >
      <div className="p-4 text-2xl font-medium text-center text-white bg-starbucks rounded-t-2xl border-starbucks-dark">
        쥬의 음료 자판기
      </div>
      <div className="flex">
        <ProductStand products={products} />
        <VMSideInfo />
      </div>
    </MotionPageContainer>
  );
};

export default VendingMachine;
