import React from "react";
import ProductStand from "components/VendingMachine/ProductStand";
import VMInfo from "components/VendingMachine/VMInfo";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "helpers/animation";

const VendingMachine = () => {
  return (
    <motion.div
      className="text-lg shadow-lg shadow-gray rounded-b-2xl"
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants(-100)}
      transition={pageTransition}
    >
      <div className="p-4 text-2xl font-medium text-center text-white rounded-t-2xl bg-starbucks border-starbucks-dark">
        쥬의 음료 자판기
      </div>
      <div className="flex">
        <ProductStand />
        <VMInfo />
      </div>
    </motion.div>
  );
};

export default VendingMachine;
