import React, { useState } from "react";
import ProductStand from "components/VendingMachine/ProductStand";
import VMInfo from "components/VendingMachine/VMInfo";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition, pageVariants } from "helpers/animation";
import beverageData from "mocks/beverageData";

const VendingMachine = () => {
  const [beverage, setBeverage] = useState(beverageData);

  return (
    <motion.div
      className="text-lg rounded-b-2xl shadow-lg shadow-gray"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants(-100)}
      transition={pageTransition}
    >
      <div className="p-4 text-2xl font-medium text-center text-white bg-starbucks rounded-t-2xl border-starbucks-dark">
        쥬의 음료 자판기
      </div>
      <div className="flex">
        <ProductStand beverage={beverage} />
        <VMInfo />
      </div>
    </motion.div>
  );
};

export default VendingMachine;
